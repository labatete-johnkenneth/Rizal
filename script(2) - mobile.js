document.addEventListener("DOMContentLoaded", function () {
  const mainSlide = document.getElementById("main-slide-mobile");
  const slidePanelsMobile = document.querySelectorAll(".slide-panel-mobile"); // Select all .slide-panel-mobile elements
  const slideViewersMobile = document.querySelectorAll(".slide-viewer-mobile"); // Select all .slide-viewer-mobile elements
  const newContent = document.getElementById("new-content-mobile");

  mainSlide.addEventListener("click", function () {
    // Apply transition and opacity to all .slide-panel-mobile and .slide-viewer-mobile elements
    slidePanelsMobile.forEach(panel => {
      panel.style.transition = "opacity 0.5s";
      panel.style.opacity = "0";
    });
    slideViewersMobile.forEach(viewer => {
      viewer.style.transition = "opacity 0.5s";
      viewer.style.opacity = "0";
    });

    // Remove all .slide-panel-mobile and .slide-viewer-mobile elements after the transition
    setTimeout(() => {
      slidePanelsMobile.forEach(panel => panel.remove());
      slideViewersMobile.forEach(viewer => viewer.remove());
      newContent.classList.remove("hidden");
    }, 500);
  });

  newContent.addEventListener("click", function () {
    newContent.classList.add("hidden");

    // Restore all .slide-panel-mobile and .slide-viewer-mobile elements
    slidePanelsMobile.forEach(panel => {
      document.querySelector(".d-flex").appendChild(panel); // Append each panel back to the parent
      panel.style.transition = "opacity 0.5s";
      panel.style.opacity = "0";
      void panel.offsetHeight; // Trigger reflow to restart the transition
      panel.style.opacity = "1";
    });

    slideViewersMobile.forEach(viewer => {
      document.querySelector(".d-flex").appendChild(viewer); // Append each viewer back to the parent
      viewer.style.transition = "opacity 0.5s";
      viewer.style.opacity = "0";
      void viewer.offsetHeight; // Trigger reflow to restart the transition
      viewer.style.opacity = "1";
    });
  });
});
