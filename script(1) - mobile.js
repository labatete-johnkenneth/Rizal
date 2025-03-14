document.addEventListener('DOMContentLoaded', function() {
  const mainSlide = document.getElementById('main-slide');
  const slides = document.querySelectorAll('.slide-thumbnail');
  let currentSlideIndex = 0;
  function updateMainSlide(index) {
    if (index >= 0 && index < slides.length) {
      const newSlideSrc = slides[index].querySelector('img').src;
      mainSlide.src = newSlideSrc;
      currentSlideIndex = index;
    }
  }
  let touchStartY = 0;
  let touchEndY = 0;
  mainSlide.addEventListener('touchstart', function(event) {
    touchStartY = event.changedTouches[0].screenY;
  });
  mainSlide.addEventListener('touchend', function(event) {
    touchEndY = event.changedTouches[0].screenY;
    handleSwipe();
  });
  function handleSwipe() {
    const swipeDistance = touchEndY - touchStartY;
    if (swipeDistance < -50) {
      updateMainSlide(currentSlideIndex + 1);
    } else if (swipeDistance > 50) {
      updateMainSlide(currentSlideIndex - 1);
    }
  }
});
