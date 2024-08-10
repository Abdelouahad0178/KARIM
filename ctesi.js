document.addEventListener('DOMContentLoaded', function () {
    // Slider logic
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.hero-slider .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function changeSlide(direction) {
        currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
        showSlide(currentSlideIndex);
    }

    document.querySelector('.prev').addEventListener('click', function () {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        changeSlide(1);
    });

    showSlide(currentSlideIndex);

    // Hamburger menu logic
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    toggleMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
