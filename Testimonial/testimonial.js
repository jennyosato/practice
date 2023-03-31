arrImg = [
  "images/img1",
  "images/img2.jpg",
  "images/img3",
  "images/img4",
  "images/img5",
];
for (x in arrImg);

let personArr = [
  {
    name: "Sammy",
    rating: 3,
    comments: "Just some random text",
    img: "images/img1.jpg",
  },
  {
    name: "Jamie",
    rating: 5,
    comments: "Just some more random text",
    img: "images/img2.jpg",
  },
  {
    name: "Alex",
    rating: 4,
    comments: "i guess some more random text",
    img: "images/img3.jpg",
  },
  {
    name: "Micheal",
    rating: 5,
    comments: "I am not exactly sure how i feel about this",
    img: "images/img4.jpg",
  },
  {
    name: "Crystal",
    rating: 5,
    comments: "Exactly what i was expecting",
    img: "images/img5.jpg",
  },
];
let i = 0;

let nameEl = document.getElementById("name-el");
let ratingEl = document.getElementById("rating-el");
let comments = document.getElementById("comment");
let profilePict = document.getElementById("profile");

let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");
profilePict.src = `${personArr[i].img}`;
nameEl.textContent = personArr[i].name;
ratingEl.textContent = String.fromCodePoint(0x2b50).repeat(personArr[i].rating);
comments.textContent = personArr[i].comments;

nextBtn.addEventListener("click", () => {
    i++;
  profilePict.src = `${personArr[i].img}`;
  nameEl.textContent = personArr[i].name;
  ratingEl.textContent = String.fromCodePoint(0x2b50).repeat(
    personArr[i].rating
  );
  comments.textContent = personArr[i].comments;
 
});

backBtn.addEventListener("click", () => {
    i--;
  profilePict.src = `${personArr[i].img}`;
  nameEl.textContent = personArr[i].name;
  ratingEl.textContent = String.fromCodePoint(0x2b50).repeat(
    personArr[i].rating)
  comments.textContent = personArr[i].comments;
 
});
