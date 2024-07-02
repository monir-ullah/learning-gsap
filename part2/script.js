gsap.from("#page1 #box1", {
  opacity: 0,
  duration: 2,
  delay: 2,
  borderRadius: "50%",
  rotate: 360,
});

// gsap.from("#page3 #box3", {
//   opacity: 0,
//   duration: 2,
//   borderRadius: "50%",
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page3 #box3",
//     scroller: "body",
//     markers: true,
//     start: "top 80%",
//   },
// });

gsap.from("#page2 #box2", {
  opacity: 0,
  rotate: 360,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 #box2",
    scrub: true,
  },
});

// gsap.from("#page2 #box2 h1", {
//   x: 500,
//   duration: 2,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "#page2 #box2 h1",
//     scrub: true,
//   },
// });

gsap.to("#pageTwo #boxTwo h1", {
  transform: "translateX(-250%)",
  duration: 2,
  scrollTrigger: {
    trigger: "#pageTwo",
    scroller: "body",
    scrub: 2,
    markers: true,
    pin: true,
    start: "top 0%",
    end: "top -100%",
  },
  // duration: 1,
});
