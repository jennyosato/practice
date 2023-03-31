let allBtn = document.getElementById("all");
let cakeBtn = document.getElementById("cakes");
let cupBtn = document.getElementById("cup");
let dessertBtn = document.getElementById("dessert");
let doughBtn = document.getElementById("dough");
let items = document.getElementById("items-list");
let inputEl = document.getElementById("input-el");
let modal = document.getElementsByClassName("modal")[0];
let closeBtn = document.getElementById("close");
let slider = document.getElementsByClassName("slider")[0];
let slideImg = document.getElementById("slider-img");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");
let x = document.getElementById("x");
let y = document.getElementById("y");

// data used
let myItems = [
  {
    img: "images/img1",
    title: "Cupcakes",
    price: "#3500",
    category: "cupcakes",
  },
  { img: "images/img2", title: "Cakes", price: "#5500", category: "cakes" },
  {
    img: "images/img3",
    title: "Cupcakes",
    price: "#4000",
    category: "cupcakes",
  },
  { img: "images/img4", title: "Cakes", price: "#4500", category: "cakes" },
  {
    img: "images/img5",
    title: "Cupcakes",
    price: "#4500",
    category: "cupcakes",
  },
  {
    img: "images/img6",
    title: "Doughnuts",
    price: "#4500",
    category: "doughnut",
  },
  { img: "images/img7", title: "Cakes", price: "#4500", category: "cakes" },
  {
    img: "images/img8",
    title: "Doughnuts",
    price: "#4500",
    category: "doughnut",
  },
  { img: "images/img9", title: "Cakes", price: "#4500", category: "cakes" },
  {
    img: "images/img10",
    title: "Cupcakes",
    price: "#4500",
    category: "cupcakes",
  },
  {
    img: "images/img11",
    title: "Dessert",
    price: "#4500",
    category: "dessert",
  },
  {
    img: "images/img12",
    title: "Dessert",
    price: "#4500",
    category: "dessert",
  },
  {
    img: "images/img13",
    title: "Dessert",
    price: "#4500",
    category: "dessert",
  },
  {
    img: "images/img15",
    title: "Doughnut",
    price: "#4500",
    category: "doughnut",
  },
  {
    img: "images/img17",
    title: "Doughnut",
    price: "#3000",
    category: "doughnut"
  }
];
//create each box with data
function arrList(arr) {
  for (let i = 0; i < arr.length; i++) {
    items.innerHTML += `<div class = "item-img"> 
    <div><img class="the" src= ${arr[i].img}.jpg> </div>
    <div><h3>${arr[i].title}</h3>
    <h4>${arr[i].price}</h4></div>
    
    </div>`;
  }
}
arrList(myItems);

//Buttons for each category

cakeBtn.addEventListener("click", () => {
  let xy = myItems.filter((x) => {
    return x.category === "cakes";
  });
  items.textContent = "";
  arrList(xy);
});

cupBtn.addEventListener("click", () => {
  let xy = myItems.filter((x) => {
    return x.category === "cupcakes";
  });
  items.textContent = "";
  arrList(xy);
});
allBtn.addEventListener("click", () => {
  items.textContent = "";
  arrList(myItems);
});
dessertBtn.addEventListener("click", () => {
  let xy = myItems.filter((x) => {
    return x.category === "dessert";
  });
  items.textContent = "";
  arrList(xy);
});
doughBtn.addEventListener("click", () => {
  let xy = myItems.filter((x) => {
    return x.category === "doughnut";
  });
  items.textContent = "";
  arrList(xy);
});
window.addEventListener("input", (event) => {
  let wx = myItems.filter((x) => {
    let y = event.target.value.toLowerCase();
    return x.title.toLowerCase().includes(y);
  });
  items.textContent = "";
  arrList(wx);
});
// Modal activator

let myImg = document.querySelectorAll(".the");
console.log(myImg);
for (let i = 0; i < myImg.length; i++)
  myImg[i].addEventListener("click", () => {
    slideImg.src = `${myItems[i].img}.jpg`;
    modal.style.display = "flex";
  });
  // Modal close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  let i = 0;
  //Modal next button
  nextBtn.addEventListener("click", () => {
    if (i < myItems.length - 1) {
      i++;
      slideImg.src = `${myItems[i].img}.jpg`;
    } else {
      i = 0;
      slideImg.src = `${myItems[i].img}.jpg`;
    }
  });
  //Modal back button
  backBtn.addEventListener("click", () => {
    if (i > 0) {
      i--;
      slideImg.style.animation = "anime"
      slideImg.src = `${myItems[i].img}.jpg`;
    } else {
      i = myItems.length - 1;
      slideImg.src = `${myItems[i].img}.jpg`;
    }
  });
//Scroll to top of the page on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
