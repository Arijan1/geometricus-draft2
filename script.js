var splide = new Splide(".splide", {
  type: "loop",
});

splide.mount();
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1e2,
  speedAsDuration: !0,
});

var menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  navLogo = document.querySelector(".nav-logo"),
  navigationList = document.getElementById("navigationLista"),
  overlay = document.querySelector(".overlay");
function pokazivanje() {
  (navigationList.style.display = "flex"),
    (menuBtn.style.display = "none"),
    (closeBtn.style.display = "block"),
    overlay.classList.add("overlay-active");
}
function zatvaranje() {
  (navigationList.style.display = "none"),
    (menuBtn.style.display = "block"),
    (closeBtn.style.display = "none"),
    overlay.classList.remove("overlay-active");
}
menuBtn.addEventListener("click", pokazivanje),
  closeBtn.addEventListener("click", zatvaranje);
