function changeSlide(button, direction) {
    const slider = button.closest('.image-slider');
    const track = slider.querySelector('.slider-track');
    const images = track.querySelectorAll('.slide-img');
    const currentActive = track.querySelector('.slide-img.active');
    
    let currentIndex = Array.from(images).indexOf(currentActive);
    let nextIndex = currentIndex + direction;
    
    // Handle wrapping
    if (nextIndex >= images.length) {
        nextIndex = 0;
    } else if (nextIndex < 0) {
        nextIndex = images.length - 1;
    }
    
    // Update active class
    currentActive.classList.remove('active');
    images[nextIndex].classList.add('active');
}
