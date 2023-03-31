let quotesTxt = document.getElementById("quotes");
let authorsTxt = document.getElementById("author");
let btnCon = document.getElementById("btn");
let mainDiv = document.getElementById("container");
let Url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

let colors = [0, 1, 2, 3, 4, 5, 6, 7, "a", "b", "c", "d", "e", "f"];
let myStr = "#";
// async function fetchQuotes() {

btnCon.addEventListener("click", async () => {
  const response = await fetch(Url);
  const data = await response.json();

  let num = Math.floor(Math.random() * data.quotes.length);
  let newArr = colors.sort(() => 0.5 - Math.random());
  let cht = myStr.concat(newArr.slice(0, 6).join(""));
  mainDiv.style.backgroundColor = cht;
  btnCon.style.color = cht;
  // document.body.style.backgroundColor = cht;
  let quote = data.quotes[num].quote;
  quotesTxt.textContent = quote;

  let author = data.quotes[num].author;
  authorsTxt.textContent = `- ${author} -`;
});
// }
// fetchQuotes();
