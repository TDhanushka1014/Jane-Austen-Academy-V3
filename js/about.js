// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Timetable Grade Filter
const gradeFilter = document.getElementById('gradeFilter');
const timetableRows = document.querySelectorAll('#timetable tbody tr');

if (gradeFilter) {
    gradeFilter.addEventListener('change', () => {
        const selectedGrade = gradeFilter.value;

        timetableRows.forEach(row => {
            const rowGrade = row.getAttribute('data-grade');

            if (selectedGrade === 'all' || rowGrade === selectedGrade) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}
