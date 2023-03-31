let myImg = [];
myImg[0] = "images/img1";
myImg[1] = "images/img2";
myImg[2] = "images/img3";
myImg[3] = "images/img5";
myImg[4] = "images/img6";

let i = 0;
let myslide = document.getElementById("sliders");
let btnBack = document.getElementById("back-btn");
let btnNxt = document.getElementById("btn-next");

btnNxt.addEventListener("click", () => {
  if (i < myImg.length - 1) {
    i++;
    myslide.style.backgroundImage = `url(${myImg[i]}.jpg)`;
  } else {
    i = 0;
    myslide.style.backgroundImage = `url(${myImg[i]}.jpg)`;
  }
});
btnBack.addEventListener("click", () => {
  if (i > 0) {
    i--;
    myslide.style.backgroundImage = `url(${myImg[i]}.jpg)`;
  } else {
    i = myImg.length - 1;
    myslide.style.backgroundImage = `url(${myImg[i]}.jpg)`;
  }
});
// setInterval(()=>{

//  if(i < myImg.length - 1) {
//         i++;
//          myslide.style.backgroundImage = `url(${myImg[i]}.jpg)`;
//        } else {
//          i = 0;
//          myslide.style.backgroundImage = `url(${myImg[i]}.jpg)`;
//        }}, 3000)

