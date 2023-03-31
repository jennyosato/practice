let inputEl = document.getElementById("input-el")
let submitBtn = document.getElementById("btn")
let textMsg = document.getElementById("text") 


submitBtn.addEventListener("click", ()=>{
    let msgTxt = inputEl.value
    if(msgTxt.length){
        textMsg.textContent = msgTxt;
        inputEl.value = ""
    }else{
        textMsg.textContent ="Please type in a message"
        setTimeout(()=>{
           textMsg.textContent = "" 
        }, 2000)
        
    }
    

})
console.log("hello")