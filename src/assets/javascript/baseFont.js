let dpr = window.devicePixelRatio;
let meta = document.getElementsByName("viewport")[0];
document.addEventListener("DOMContentLoaded", (ev) => {
    let e = ev || window.event;
    e.stopPropagation();
    document.getElementsByTagName("html").style.fontSize = window.innerWidth / 10;
    meta.setAttribute("content", "width=device-width,initial-scale=" + 1 / dpr);
});
