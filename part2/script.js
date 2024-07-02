gsap.from("#page1 #box1", {
  opacity: 0,
  duration: 2,
  delay: 2,
  borderRadius: "50%",
  rotate: 360,
});

gsap.from("#page3 #box3", {
  opacity: 0,
  duration: 2,
  borderRadius: "50%",
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box3",
    scroller: "body",
    markers: true,
    start: "top 80%",
  },
});

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

gsap.from("#page2 #box2 h1", {
  x: 500,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 #box2 h1",
    scrub: true,
  },
});
