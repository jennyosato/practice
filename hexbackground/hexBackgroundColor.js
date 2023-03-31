let cont = document.getElementById("body");
let colorTag = document.getElementById("color_name")
let changeBtn = document.getElementById("btn");
let hexColorArr = [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"]
let myStr = "#"
changeBtn.addEventListener("click", ()=>{
    let newArr = hexColorArr.sort(()=> 0.5 - Math.random())
    let cht = myStr.concat(newArr.slice(0, 6).join(""))
    cont.style.backgroundColor = cht
    colorTag.textContent = cht
   
})
