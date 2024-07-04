function breakTheTextFunction() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  const splittedText = h1Text.split("");

  const halfValue = Math.floor(splittedText.length / 2);
  let cluttered = "";
  splittedText.forEach(function (element, index) {
    if (index < halfValue) {
      cluttered += `<span class="firstPart">${element}</span>`;
    } else {
      if (element == " ") {
        cluttered += `${element}`;
      } else {
        cluttered += `<span class="lastPart">${element}</span>`;
      }
    }
  });
  h1.innerHTML = cluttered;

  //   console.log(cluttered);
}
breakTheTextFunction();

gsap.from("h1 .firstPart", {
  y: -100,
  duration: 0.8,
  ease: "elastic.out(1,0.3)",
  opacity: 0,
  delay: 0.5,
  stagger: 0.5,
});

gsap.from("h1 .lastPart", {
  y: -100,
  duration: 0.8,
  opacity: 0,
  ease: "elastic.out(1,0.3)",
  delay: 0.5,
  stagger: -0.5,
});
