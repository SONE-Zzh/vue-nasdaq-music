let dpr = window.devicePixelRatio;
let meta = document.getElementsByName("viewport")[0];
document.addEventListener("DOMContentLoaded", ev => {
  let e = ev || window.event;
  let rem = window.innerWidth / 10 + "px";
  e.stopPropagation();
  document.getElementsByTagName("html")[0].style.fontSize = rem;
  meta.setAttribute(
    "content",
    "width=device-width,initial-scale=" + Math.ceil((1 / dpr) * 10) / 10
  );
  document.body.setAttribute(
    "style",
    "font-size:" + Math.floor(16 * dpr) + "px"
  );
});
