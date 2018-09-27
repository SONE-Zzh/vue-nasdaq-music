let dpr = window.devicePixelRatio;
let meta = document.getElementsByName("viewport")[0];
document.addEventListener("DOMContentLoaded", ev => {
  let e = ev || window.event;
  e.stopPropagation();
  document.getElementsByTagName("html")[0].style.fontSize = window.innerWidth / 10 + "px";
  meta.setAttribute("content", "width=device-width,initial-scale=" + 1 / dpr);
});
