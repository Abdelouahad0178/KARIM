document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (toggleMenu && navLinks) {
        toggleMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Empêche la navigation par défaut pour le lien
                dropdown.classList.toggle('active'); // Toggle la classe active sur le parent li
                dropdownMenu.classList.toggle('active'); // Toggle la visibilité du sous-menu
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.toggle-menu')) {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-menu').classList.remove('active'); // Fermer les sous-menus ouverts
            });
        }
    });
});
