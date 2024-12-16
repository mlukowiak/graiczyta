const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    toggleButton.checked = true;
} else {
    toggleButton.checked = false;
}

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
});