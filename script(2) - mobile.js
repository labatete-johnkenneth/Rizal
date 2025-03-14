document.addEventListener("DOMContentLoaded", function () {
  const mainSlideMobile = document.getElementById("tap");
  const slidePanelsMobile = document.querySelectorAll(".slide-panel-mobile");
  const slideViewerMobile = document.querySelector(".slide-viewer-mobile");
  const newContentMobile = document.getElementById("new-content-mobile");
  const slidePanelParents = [];
  const slidePanelNextSiblings = [];
  slidePanelsMobile.forEach((panel, index) => {
    slidePanelParents[index] = panel.parentElement;
    slidePanelNextSiblings[index] = panel.nextSibling;
  });
  const slideViewerParent = slideViewerMobile.parentElement;
  const slideViewerNextSibling = slideViewerMobile.nextSibling;
  function handleMainSlideTap() {
    slidePanelsMobile.forEach(panel => {
      panel.style.transition = "opacity 0.5s";
      panel.style.opacity = "0";
    });
    slideViewerMobile.style.transition = "opacity 0.5s";
    slideViewerMobile.style.opacity = "0";
    setTimeout(() => {
      slidePanelsMobile.forEach(panel => panel.remove());
      slideViewerMobile.remove();
      newContentMobile.classList.remove("hidden");
    }, 500);
  }
  mainSlideMobile.addEventListener("touchstart", function (event) {
    event.preventDefault();
    handleMainSlideTap();
  });
  mainSlideMobile.addEventListener("click", function (event) {
    event.preventDefault();
    handleMainSlideTap();
  });
  newContentMobile.addEventListener("click", function () {
    newContentMobile.classList.add("hidden");
    slidePanelsMobile.forEach((panel, index) => {
      if (slidePanelNextSiblings[index]) {
        slidePanelParents[index].insertBefore(panel, slidePanelNextSiblings[index]);
      } else {
        slidePanelParents[index].appendChild(panel);
      }
      panel.style.transition = "opacity 0.5s";
      panel.style.opacity = "0";
      void panel.offsetHeight;
      panel.style.opacity = "1";
    });
    if (slideViewerNextSibling) {
      slideViewerParent.insertBefore(slideViewerMobile, slideViewerNextSibling);
    } else {
      slideViewerParent.appendChild(slideViewerMobile);
    }
    slideViewerMobile.style.transition = "opacity 0.5s";
    slideViewerMobile.style.opacity = "0";
    void slideViewerMobile.offsetHeight;
    slideViewerMobile.style.opacity = "1";
  });
});
