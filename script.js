document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const intervalTime = 1500; // 1.5 Seconds

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Start rotation
    if (slides.length > 0) {
        setInterval(nextSlide, intervalTime);
    }
});
