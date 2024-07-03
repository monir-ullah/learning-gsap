const menu = document.querySelector("#nav i");
const closeMenu = document.querySelector("#full i");

const timeline = gsap.timeline({ paused: true });

timeline.to("#full", {
  right: 0,
  duration: 1,
  ease: "power1.in",
});

timeline.from("#full h5", {
  x: 150,
  stagger: 0.3,
  duration: 0.8,
  opacity: 0,
});

timeline.from("#full i", {
  opacity: 0,
  delay: 0.2,
  duration: 0.8,
  ease: "power1.in",
});

menu.addEventListener("click", function () {
  timeline.play();
});

closeMenu.addEventListener("click", function () {
  timeline.reverse();
});
