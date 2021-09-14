const colors = [
    "red",
    "green",
    "rgba(133,122,200)",
    "#f15025",
    "#082032",
    "#FF4C29",
    "#EFB7B7",
    "#2C394B",
    "#00C1D4",
    "#B97A95",
    "#5089C6",
    "#FFAA4C",
    "#A3A847",
    "#77ACF1",
    "#B4846C",
    "#064420",
    "#00C9B1",
    "#FFE9E3",
  ],
  btn = document.getElementById("btn"),
  color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomIn = randomArr();
  console.log(randomIn);
  document.body.style.backgroundColor = colors[randomIn];
  color.textContent = colors[randomIn];
});
function randomArr() {
  return Math.round(Math.random() * colors.length - 1);
}
