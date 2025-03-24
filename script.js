document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-toggle-off');
            themeIcon.classList.add('fa-toggle-on');
        } else {
            themeIcon.classList.remove('fa-toggle-on');
            themeIcon.classList.add('fa-toggle-off');
        }
    }


    // Event listener for theme toggle button
    themeToggle.addEventListener('click', toggleDarkMode);
});
