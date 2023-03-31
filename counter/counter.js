let countEl = document.getElementById("count")
let increment = document.getElementById("increment-btn")
let decrement = document.getElementById("decrement-btn")
 let Counter = 0
 increment.addEventListener("click", () => { 
    countEl.textContent = Counter += 1
 })
 decrement.addEventListener("click", () => { 
    countEl.textContent = Counter -= 1
 })
