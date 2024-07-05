window.addEventListener("wheel", function (wheelEvent) {
  if (wheelEvent.deltaY > 0) {
    gsap.to("#marque", {
      transform: "translateX(0%)",
      duration: 10,
      repeat: -1,
      overwrite: false,
      ease: "none",
    });

    gsap.to("#marque img", {
      rotate: 0,
    });
  } else {
    gsap.to("#marque", {
      transform: "translateX(-200%)",
      duration: 10,
      overwrite: false,
      repeat: -1,
      ease: "none",
    });

    gsap.to("#marque img", {
      rotate: 180,
    });
  }
});
