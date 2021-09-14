const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"],
  btn = document.getElementById("btn"),
  color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let addHash = "#";
  for (let i = 0; i < 6; i++) {
    addHash += hex[getRandom()];
    console.log(addHash);
  }
  color.textContent = addHash;
  document.body.style.backgroundColor = addHash;
});

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
