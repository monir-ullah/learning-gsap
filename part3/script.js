let path = "M 10 100 Q 250 100 490 100";
let finalPath = "M 10 100 Q 250 100 490 100";

let string = document.getElementById("string");

string.addEventListener("mousemove", function (event) {
  console.log(event.x, event.y);
  gsap.to("string svg", {
    attr: { d: path },
  });
});
