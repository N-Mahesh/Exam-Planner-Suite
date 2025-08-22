class CourseHeatmapCalendar {
    constructor() {
        this.data = null;
        this.currentDate = new Date();
        this.selectedCourse = null;
        this.heatmapData = {};
        
        this.init();
    }

    async init() {
        await this.loadData();
        this.setupEventListeners();
        this.populateCourseSelector();
        this.renderCalendar();
    }

    async loadData() {
        try {
            const response = await fetch('ma_dump.json');
            this.data = await response.json();
            console.log('Data loaded:', this.data);
        } catch (error) {
            console.error('Error loading data:', error);
            // Fallback to empty data structure
            this.data = { students: [], courses: [] };
        }
    }

    setupEventListeners() {
        document.getElementById('courseSelect').addEventListener('change', (e) => {
            this.selectedCourse = e.target.value;
            this.calculateHeatmapData();
            this.renderCalendar();
        });

        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });
    }

    populateCourseSelector() {
        const courseSelect = document.getElementById('courseSelect');
        courseSelect.innerHTML = '<option value="">Choose a course...</option>';
        
        if (this.data && this.data.courses) {
            this.data.courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.course_id;
                option.textContent = course.course_name;
                courseSelect.appendChild(option);
            });
        }
    }

    calculateHeatmapData() {
        this.heatmapData = {};
        
        if (!this.selectedCourse || !this.data) return;

        // Step 1: Get all students enrolled in the selected course
        const enrolledStudents = this.data.students.filter(student => 
            student.enrollments.some(enrollment => enrollment.course_id === this.selectedCourse)
        );

        // Step 2: For each enrolled student, check ALL their courses for assignments
        enrolledStudents.forEach(student => {
            // Step 3: Go through each of the student's enrollments
            student.enrollments.forEach(enrollment => {
                const courseId = enrollment.course_id;
                const sectionId = enrollment.section_id;
                
                // Find the course data
                const course = this.data.courses.find(c => c.course_id === courseId);
                if (!course || !course.mas) return;
                
                // Step 4: Check all assignments in this course
                course.mas.forEach(assignment => {
                    assignment.due_dates.forEach(dueDate => {
                        const date = dueDate.due_date;
                        const assignmentSectionId = dueDate.section_id;
                        
                        // Check if this assignment applies to this student
                        // Either it's for all sections (null) or matches student's section
                        if (assignmentSectionId === null || assignmentSectionId === sectionId) {
                            // Add to heatmap data
                            if (!this.heatmapData[date]) {
                                this.heatmapData[date] = { count: 0, assignments: [] };
                            }
                            this.heatmapData[date].count += 1;
                            this.heatmapData[date].assignments.push({
                                title: assignment.title,
                                courseName: course.course_name,
                                studentId: student.user_id,
                                sectionId: assignmentSectionId
                            });
                        }
                    });
                });
            });
        });
    }

    getHeatLevel(count) {
        if (count === 0) return 0;
        if (count <= 2) return 1;
        if (count <= 5) return 2;
        if (count <= 10) return 3;
        return 4;
    }

    renderCalendar() {
        const calendar = document.getElementById('calendar');
        const monthDisplay = document.getElementById('currentMonth');
        
        // Clear calendar
        calendar.innerHTML = '';
        
        // Display current month/year
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        monthDisplay.textContent = `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;

        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const headerCell = document.createElement('div');
            headerCell.className = 'day-header';
            headerCell.textContent = day;
            calendar.appendChild(headerCell);
        });

        // Get first day of month and number of days
        const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day-cell other-month';
            calendar.appendChild(emptyCell);
        }

        // Add days of the month
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';

            // Day number (top-left)
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayCell.appendChild(dayNumber);

            // Check if it's today
            if (this.currentDate.getFullYear() === today.getFullYear() &&
                this.currentDate.getMonth() === today.getMonth() &&
                day === today.getDate()) {
                dayCell.classList.add('today');
            }

            // Apply heatmap styling
            const dateKey = this.formatDate(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
            if (this.heatmapData[dateKey]) {
                const heatLevel = this.getHeatLevel(this.heatmapData[dateKey].count);
                dayCell.classList.add(`heat-${heatLevel}`);
                // Centered MA count label
                const maCount = document.createElement('div');
                maCount.className = 'ma-count';
                maCount.textContent = `${this.heatmapData[dateKey].count} MAs`;
                dayCell.appendChild(maCount);
                
                // Add click event to show details
                dayCell.addEventListener('click', () => {
                    this.showDayDetails(dateKey, this.heatmapData[dateKey]);
                });
                dayCell.style.cursor = 'pointer';
            } else {
                dayCell.classList.add('heat-0');
                const maCount = document.createElement('div');
                maCount.className = 'ma-count';
                maCount.textContent = '0 MAs';
                dayCell.appendChild(maCount);
            }

            calendar.appendChild(dayCell);
        }
    }

    formatDate(year, month, day) {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

    showDayDetails(date, dayData) {
        const infoPanel = document.getElementById('infoPanel');
        const dayInfo = document.getElementById('dayInfo');
        const assignmentsList = document.getElementById('assignmentsList');

        // Format date for display
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        dayInfo.textContent = `${formattedDate} - ${dayData.count} student assignments due`;

        // Show assignments
        assignmentsList.innerHTML = '';
        if (dayData.assignments && dayData.assignments.length > 0) {
            const assignmentsTitle = document.createElement('h4');
            assignmentsTitle.textContent = 'Assignments Due:';
            assignmentsTitle.style.marginBottom = '10px';
            assignmentsList.appendChild(assignmentsTitle);

            dayData.assignments.forEach(assignment => {
                const assignmentDiv = document.createElement('div');
                assignmentDiv.className = 'assignment-item';
                
                const titleDiv = document.createElement('div');
                titleDiv.className = 'assignment-title';
                titleDiv.textContent = assignment.title;
                
                const courseDiv = document.createElement('div');
                courseDiv.className = 'student-name';
                courseDiv.textContent = assignment.courseName;
                
                const studentDiv = document.createElement('div');
                studentDiv.style.fontSize = '0.8em';
                studentDiv.style.color = '#7f8c8d';
                studentDiv.textContent = `Student: ${assignment.studentId}`;
                
                if (assignment.sectionId) {
                    const sectionDiv = document.createElement('div');
                    sectionDiv.style.fontSize = '0.8em';
                    sectionDiv.style.color = '#7f8c8d';
                    sectionDiv.textContent = `Section: ${assignment.sectionId}`;
                    assignmentDiv.appendChild(sectionDiv);
                }
                
                assignmentDiv.appendChild(titleDiv);
                assignmentDiv.appendChild(courseDiv);
                assignmentDiv.appendChild(studentDiv);
                assignmentsList.appendChild(assignmentDiv);
            });
        }

        infoPanel.style.display = 'block';
    }
}

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CourseHeatmapCalendar();
});