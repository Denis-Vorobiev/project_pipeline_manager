const zoomElement = document.querySelector("div.zoomable");
let zoom = 1;
const ZOOM_SPEED = 0.1;
console.log(zoomElement)
document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  }
});

// https://css-tricks.com/video-screencasts/200-scroll-to-zoom/