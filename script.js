AOS.init();

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


var splide = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
  autoplay: true,
  pagination: boolean = false,

  breakpoints: {
    1030: {
      perPage: 2,
    },
    550: {
      perPage: 1,
    },
  },
} );

splide.mount();

// VIDEO SE PUSTA NA HOVER

const videoContainers = document.querySelectorAll('.col-md-12.col-sm-12.position-relative');

videoContainers.forEach(container => {
  const video = container.querySelector('.video-hoverplay');
  const playButton = container.querySelector('.play-button');

  container.addEventListener('mouseenter', () => {
    video.play();
    playButton.style.display = "none";
  });

  container.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    playButton.style.display = "block";
  });
});
