document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle the main menu
    if (toggleMenu && navLinks) {
        toggleMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Toggle submenus
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Prevent default navigation behavior
                const isActive = dropdown.classList.contains('active');

                // Close all dropdowns
                dropdowns.forEach(d => {
                    d.classList.remove('active');
                    d.querySelector('.dropdown-menu').classList.remove('active');
                });

                // Toggle the clicked dropdown
                if (!isActive) {
                    dropdown.classList.add('active');
                    dropdownMenu.classList.add('active');
                }
            }
        });
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.toggle-menu')) {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-menu').classList.remove('active');
            });
        }
    });
});
