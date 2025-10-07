#!/usr/bin/env python3
"""
export_canvas_dump.py  (v2 – all‑courses + rate‑limit safe)
---------------------------------------------------------
Generates the JSON blueprint for the MA heat‑map, now able to:
  • Scan *every* course in an account (or a custom list of course IDs)
  • Respect Canvas rate limits (429 + remaining‑header back‑off)

Usage examples
~~~~~~~~~~~~~~
# 1) Dump a single origin course (old behaviour)
python export_canvas_dump.py --origin 12345 > dump.json

# 2) Dump *all* courses in account 1 (available state)
python export_canvas_dump.py --account 1 \
       --start 2025-01-06 --end 2025-04-11 > dump.json

# 3) Dump an explicit list of courses
python export_canvas_dump.py --courses 111,222,333 > dump.json

Vars (same):
CANVAS_BASE   https://<inst>.instructure.com
CANVAS_TOKEN  account‑level read‑only PAT
"""
import os, sys, json, time, argparse, requests
from urllib.parse import urljoin
from datetime import datetime

BASE   = "https://eastsideprep.instructure.com"
TOKEN  = os.getenv("CANVAS_TOKEN") #or raise Exception("Set CANVAS_TOKEN env var")
if not BASE or not TOKEN:
    sys.exit("Set CANVAS_BASE and CANVAS_TOKEN env vars")

S = requests.Session()
S.headers.update({"Authorization": f"Bearer {TOKEN}",
                 "Accept": "application/json+canvas-string-ids"})

# ----------------------------------------------------------------------------------
# Rate‑limit aware GET with pagination
# ----------------------------------------------------------------------------------

def canvas_get(path, params=None):
    url = urljoin(BASE + "/", f"api/v1/{path.lstrip('/')}")
    params = params or {}
    out = []
    while url:
        resp = S.get(url, params=params)
        if resp.status_code == 429:  # hit hard limit
            wait = int(resp.headers.get("Retry-After", "1")) + 1
            time.sleep(wait)
            continue
        if resp.status_code != 200:
            sys.exit(f"Canvas error {resp.status_code}: {resp.text}")
        if resp.headers.get("Content-Type", "").startswith("application/json"):
            data = resp.json()
            out.extend(data) if isinstance(data, list) else out.append(data)
        else:
            sys.exit("Unexpected non‑JSON from Canvas")
        # soft‑limit throttle
        remaining = int(resp.headers.get("X-Rate-Limit-Remaining", "2"))
        if remaining < 2:
            wait = int(resp.headers.get("Retry-After", "1")) + 1
            time.sleep(wait)
        # pagination link
        url = None
        link = resp.headers.get("Link")
        if link:
            for part in link.split(','):
                if 'rel="next"' in part:
                    url = part.split(';')[0].strip()[1:-1]
                    break
    return out

# ----------------------------------------------------------------------------------
# CLI
# ----------------------------------------------------------------------------------
parser = argparse.ArgumentParser()
parser.add_argument("--origin", type=int, help="Single origin course ID (legacy)")
parser.add_argument("--courses", type=str, help="Comma‑separated course IDs")
parser.add_argument("--account", type=int, help="Account ID to pull ALL courses from")
parser.add_argument("--start", type=str)
parser.add_argument("--end", type=str)
parser.add_argument("--all-assignments", action="store_true")
args = parser.parse_args()

if not (args.origin or args.courses or args.account):
    sys.exit("Provide --origin or --courses or --account")

def in_window(iso):
    if not iso:
        return False
    if args.start and iso < args.start:
        return False
    if args.end and iso > args.end:
        return False
    return True

# ----------------------------------------------------------------------------------
# Build course list
# ----------------------------------------------------------------------------------
course_ids = set()
if args.origin:
    course_ids.add(args.origin)
if args.courses:
    course_ids.update(int(c.strip()) for c in args.courses.split(','))
if args.account:
    print(f"Fetching all courses in account {args.account}…", file=sys.stderr)
    acc_courses = canvas_get(f"accounts/{args.account}/courses", {
        "state[]": "available", "per_page": 100
    })
    course_ids.update(c["id"] for c in acc_courses)

print(f"Total courses to scan: {len(course_ids)}", file=sys.stderr)

# ----------------------------------------------------------------------------------
# Pass 1: gather students + their section per course
# ----------------------------------------------------------------------------------
students = {}
for cid in sorted(course_ids):
    enrolls = canvas_get(f"courses/{cid}/enrollments", {
        "type[]": "StudentEnrollment", "state[]": "active", "per_page": 100
    })
    for e in enrolls:
        uid = e["user_id"]
        students.setdefault(uid, {"user_id": uid, "enrollments": []})
        students[uid]["enrollments"].append({
            "course_id": cid,
            "section_id": e.get("course_section_id")
        })

print(f"Unique students gathered: {len(students)}", file=sys.stderr)

# ----------------------------------------------------------------------------------
# Pass 2: scan assignments per course
# ----------------------------------------------------------------------------------
courses_out = []
for cid in sorted(course_ids):
    meta = canvas_get(f"courses/{cid}")[0]
    ce = {"course_id": cid, "course_name": meta.get("name"), "mas": []}

    assigns = canvas_get(f"courses/{cid}/assignments", {
        "include[]": "all_dates", "workflow_state[]": "published",
        "workflow_state[]": "unpublished", "per_page": 100
    })

    for a in assigns:
        if not args.all_assignments and "MA" not in a.get("name", ""):
            continue
        me = {"assignment_id": a["id"], "title": a.get("name"), "due_dates": []}
        # universal date
        if a.get("due_at"):
            d = a["due_at"].split("T")[0]
            if in_window(d):
                me["due_dates"].append({"due_date": d, "section_id": None})
        # overrides
        overrides = canvas_get(f"courses/{cid}/assignments/{a['id']}/overrides")
        for o in overrides:
            d = o.get("due_at") and o["due_at"].split("T")[0]
            if not d or not in_window(d):
                continue
            row = {"due_date": d}
            if o.get("course_section_id"):
                row["section_id"] = o["course_section_id"]
            if o.get("student_ids"):
                row["student_ids"] = o["student_ids"]
            me["due_dates"].append(row)
        if me["due_dates"]:
            ce["mas"].append(me)
    courses_out.append(ce)

# ----------------------------------------------------------------------------------
# Dump JSON
# ----------------------------------------------------------------------------------
json.dump({"students": list(students.values()), "courses": courses_out}, sys.stdout, indent=2)
print("\nGenerated JSON for", len(course_ids), "courses.", file=sys.stderr)