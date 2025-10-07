# User Calendar Colorizer

A lightweight JavaScript utility that colors an existing calendar based on a user's Major Assessment (MA) workload per day.

## Overview

This script is designed to be embedded into any page with an existing calendar. It:
1. Takes a `user_id` as input
2. Fetches student enrollment and MA data from `ma_dump.json`
3. Calculates how many MAs the user has on each day
4. Colors the calendar cells based on MA density using a green gradient

## How It Works

### The Algorithm

1. **Find the User**: Looks up the user by `user_id` in the student data
2. **Get Enrollments**: Retrieves all courses and sections the user is enrolled in
3. **Collect MAs**: For each enrollment:
   - Finds the course in the course data
   - Checks all MAs in that course
   - Includes MAs where `section_id` is `null` (applies to all) or matches the user's section
4. **Count by Date**: Groups MAs by due date and counts them
5. **Color Calendar**: Applies background colors to calendar cells based on MA count

### Color Scale

| MA Count | Color | Hex Code |
|----------|-------|----------|
| 0 MAs    | None (white) | - |
| 1 MA     | Light Green | `#b8e6b8` |
| 2 MAs    | Medium Green | `#80d480` |
| 3 MAs    | Green | `#4dac4d` |
| 4 MAs    | Dark Green | `#2d862d` |
| 5+ MAs   | Very Dark Green | `#1a5c1a` |

## Usage

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Calendar</title>
</head>
<body>
    <!-- Your existing calendar with td.fc-day elements -->
    <div class="calendar-header">
        <span class="navigation_title_text">October 2025</span>
    </div>
    
    <table>
        <td class="fc-day" data-date="2025-10-12">12</td>
        <!-- more calendar cells... -->
    </table>

    <!-- Include the script -->
    <script src="user_calendar_colorizer.js"></script>
    
    <!-- Initialize for a specific user -->
    <script>
        initUserCalendarColorizer('12552282');
    </script>
</body>
</html>
```

### URL Parameter Usage

The script automatically initializes if a `user_id` parameter is in the URL:

```
https://example.com/calendar.html?user_id=12552282
```

No additional JavaScript needed!

### Manual Initialization

```javascript
// Initialize and get colorizer instance
const colorizer = await initUserCalendarColorizer('12552282');

// Later, if calendar is re-rendered, refresh colors
colorizer.refresh();
```

## Requirements

### HTML Structure

Your calendar must have:

1. **Calendar cells** with class `fc-day` and `data-date` attribute:
   ```html
   <td class="fc-day" data-date="2025-10-12">12</td>
   ```

2. **Month indicator** (optional, for debugging):
   ```html
   <span class="navigation_title_text">October 2025</span>
   ```

### Data File

The script expects `ma_dump.json` in the same directory with this structure:

```json
{
  "students": [
    {
      "user_id": "12552282",
      "enrollments": [
        { "course_id": "3509873", "section_id": "3715016" }
      ]
    }
  ],
  "courses": [
    {
      "course_id": "3509873",
      "course_name": "AP Biology",
      "mas": [
        {
          "assignment_id": "555",
          "title": "Cell Respiration Test",
          "due_dates": [
            { "due_date": "2025-10-15", "section_id": null }
          ]
        }
      ]
    }
  ]
}
```

## API Reference

### `initUserCalendarColorizer(userId)`

Initializes the calendar colorizer for a specific user.

**Parameters:**
- `userId` (string): The user ID to color the calendar for

**Returns:**
- Promise<UserCalendarColorizer>: The colorizer instance

**Example:**
```javascript
const colorizer = await initUserCalendarColorizer('12552282');
```

### `UserCalendarColorizer.refresh()`

Re-applies colors to the calendar. Useful if the calendar DOM is regenerated.

**Example:**
```javascript
window.userCalendarColorizer.refresh();
```

## Examples

### Example 1: Simple Integration

See `user_calendar_example.html` for a complete working example.

### Example 2: With User Selector

```html
<select id="userSelect">
    <option value="12552282">Student A</option>
    <option value="12552287">Student B</option>
</select>
<button onclick="loadUser()">Load Calendar</button>

<script src="user_calendar_colorizer.js"></script>
<script>
    async function loadUser() {
        const userId = document.getElementById('userSelect').value;
        
        // Clear previous colors
        document.querySelectorAll('td.fc-day').forEach(cell => {
            cell.style.removeProperty('background-color');
        });
        
        // Load new user
        await initUserCalendarColorizer(userId);
    }
</script>
```

### Example 3: Dynamic Calendar Updates

```javascript
// Your calendar re-render function
function renderCalendar() {
    // ... calendar rendering logic ...
    
    // Re-apply user colors after render
    if (window.userCalendarColorizer) {
        window.userCalendarColorizer.refresh();
    }
}
```

## Comparison with Original Script

### Original `script.js`
- **Purpose**: Shows MA density across all students in a selected course
- **User Input**: Course selection dropdown
- **Calculation**: Counts all student MAs per day for that course
- **Rendering**: Creates its own calendar DOM

### New `user_calendar_colorizer.js`
- **Purpose**: Shows one user's personal MA workload
- **User Input**: User ID (via parameter or URL)
- **Calculation**: Counts only the specified user's MAs per day
- **Rendering**: Colors existing calendar cells

## Troubleshooting

### No colors appearing?

1. Check console for errors
2. Verify `ma_dump.json` is accessible
3. Ensure calendar cells have `fc-day` class and `data-date` attributes
4. Confirm user ID exists in the data

### Colors not updating after calendar change?

Call `refresh()` on the colorizer instance:
```javascript
window.userCalendarColorizer.refresh();
```

### Want different colors?

Edit the `getBackgroundColor(count)` method in the script:
```javascript
getBackgroundColor(count) {
    if (count === 1) return '#your-color-here';
    // ...
}
```

## Browser Compatibility

Works in all modern browsers that support:
- ES6 Classes
- Async/await
- Fetch API
- CSS `setProperty` with `!important`

## License

Free to use and modify for educational purposes.
