document.addEventListener("DOMContentLoaded", function () {
  const mainSlide = document.getElementById("main-slide");
  const slidePanel = document.querySelector(".slide-panel");
  const slideViewer = document.querySelector(".slide-viewer");
  const newContent = document.getElementById("new-content");
  const slidePanelParent = slidePanel.parentElement;
  const slidePanelNextSibling = slidePanel.nextSibling;
  const slideViewerParent = slideViewer.parentElement;
  const slideViewerNextSibling = slideViewer.nextSibling;
  mainSlide.addEventListener("click", function () {
    slidePanel.style.transition = "opacity 0.5s";
    slideViewer.style.transition = "opacity 0.5s";
    slidePanel.style.opacity = "0";
    slideViewer.style.opacity = "0";
    setTimeout(() => {
      slidePanel.remove();
      slideViewer.remove();
      newContent.classList.remove("hidden");
    }, 500);
  });
  newContent.addEventListener("click", function () {
    newContent.classList.add("hidden");
    if (slidePanelNextSibling) {
      slidePanelParent.insertBefore(slidePanel, slidePanelNextSibling);
    } else {
      slidePanelParent.appendChild(slidePanel);
    }
    if (slideViewerNextSibling) {
      slideViewerParent.insertBefore(slideViewer, slideViewerNextSibling);
    } else {
      slideViewerParent.appendChild(slideViewer);
    }
    slidePanel.style.transition = "opacity 0.5s";
    slideViewer.style.transition = "opacity 0.5s";
    slidePanel.style.opacity = "0";
    slideViewer.style.opacity = "0";
    void slidePanel.offsetHeight;
    void slideViewer.offsetHeight;
    slidePanel.style.opacity = "1";
    slideViewer.style.opacity = "1";
  });
});
