document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar-container');
    
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            navbar.innerHTML = html;
        });
});