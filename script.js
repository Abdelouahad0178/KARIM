document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle menu visibility on small screens
    if (toggleMenu && navLinks) {
        toggleMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-active');
        });

        // Close the menu when clicking on a link
        navLinksItems.forEach(item => {
            item.addEventListener('click', function(e) {
                const parentDropdown = e.target.closest('.dropdown');
                const isDropdownToggle = e.target.parentElement.classList.contains('dropdown');
                
                // If clicking on a dropdown toggle, show/hide the submenu without redirecting
                if (parentDropdown && isDropdownToggle) {
                    e.preventDefault();
                    const dropdownMenu = e.target.nextElementSibling;
                    if (dropdownMenu) {
                        dropdownMenu.classList.toggle('active');
                    }
                } else {
                    // Close the menu when clicking on a normal link
                    navLinks.classList.remove('active');
                    document.body.classList.remove('nav-active');
                }
            });
        });

        // Close the menu when clicking outside of it
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-active');
            }
        });
    }

    // Toggle dropdown menus
    if (dropdowns) {
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('a');
            if (dropdownToggle) {
                dropdownToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            }
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.toggle-menu')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            if (navLinks) {
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-active');
            }
        }
    });

    // Slider for testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.style.display = 'none');
            testimonials[index].style.display = 'block';
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        showTestimonial(currentTestimonial);
        setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds
    }

    // Slider for main images
    let slideIndex = 0;
    let productSlideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (slides.length > 0) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            if (dots[slideIndex - 1]) {
                dots[slideIndex - 1].className += " active";
            }
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Slider for product images
    function showProductSlides(n) {
        let i;
        let slides = document.getElementsByClassName("product-slide");
        let dots = document.getElementsByClassName("product-dot");
        if (slides.length > 0) {
            if (n > slides.length) { productSlideIndex = 1 }
            if (n < 1) { productSlideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[productSlideIndex - 1].style.display = "block";
            if (dots[productSlideIndex - 1]) {
                dots[productSlideIndex - 1].className += " active";
            }
        }
    }

    function plusProductSlides(n) {
        showProductSlides(productSlideIndex += n);
    }

    function currentProductSlide(n) {
        showProductSlides(productSlideIndex = n);
    }

    // Assign functions to global scope for HTML to access
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
    window.plusProductSlides = plusProductSlides;
    window.currentProductSlide = currentProductSlide;

    // Initialize slideshows
    showSlides();
    showProductSlides(productSlideIndex);
});
