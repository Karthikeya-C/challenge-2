document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
