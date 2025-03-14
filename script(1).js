document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".slide-thumbnail");
  const mainSlide = document.getElementById("main-slide");
  let currentSlideIndex = 0;
  let isInteractionStarted = false;
  const slides = Array.from(thumbnails).map((thumbnail) => thumbnail.querySelector("img").src);
  function updateMainSlide(index) {
    if (index >= 0 && index < slides.length) {
      mainSlide.src = slides[index];
      currentSlideIndex = index;
    }
  }
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      if (!isInteractionStarted) {
        isInteractionStarted = true;
      }
      updateMainSlide(index);
    });
  });
  document.addEventListener("keydown", function (event) {
    if (!isInteractionStarted) return;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        updateMainSlide(currentSlideIndex - 1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        updateMainSlide(currentSlideIndex + 1);
        break;
    }
  });
  document.addEventListener("click", function (event) {
    const isClickInsideSlidePanel = event.target.closest(".slide-panel") !== null;
    const isClickInsideSlideViewer = event.target.closest(".slide-viewer") !== null;
    if (!isClickInsideSlidePanel && !isClickInsideSlideViewer) {
      isInteractionStarted = false;
    }
  });
});
