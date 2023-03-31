let cont = document.getElementById("body");
let changeBtn = document.getElementById("btn");
let colorArr = [
  "white",
  "green",
  "blue",
  "yellow",
  "red",
  "purple",
  "gold",
];

changeBtn.addEventListener("click", () => {
  let colorIndex = Math.floor(Math.random() * colorArr.length);
  cont.style.backgroundColor = colorArr[colorIndex];
  changeBtn.style.backgroundColor = colorArr[colorIndex - 1]
});
