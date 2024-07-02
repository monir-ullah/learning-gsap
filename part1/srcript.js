// gsap.from("h1", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   delay: 3,
//   stagger: 0.2,
//   repeat: -1,
// });

// gsap.to("#box", {
//   x: "1000px",
//   duration: 5,
//   delay: 3,
//   backgroundColor: "yellow",
//   rotate: 360,
//   borderRadius: "50%",
// });

// gsap.from("#box1", {
//   x: 1000,
//   duration: 8,
//   delay: 2,
//   backgroundColor: "green",
//   rotate: 20,
//   borderRadius: "50%",
// });

const tl = gsap.timeline();

tl.from("h1", {
  opacity: 0,
  y: "-70px",
  duration: 1.5,
  delay: 1,
});

tl.from("h4", {
  opacity: 0,
  y: "-70px",
  duration: 1.5,
  stagger: 0.3,
});

tl.from("h2", {
  opacity: 0,
  y: 50,
  scale: 0.5,
  duration: 1.5,
});
