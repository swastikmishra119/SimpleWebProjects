

let counter = document.getElementById("count")
let count=0
function increase(){
   count += 1
   counter.innerText=count
} 

let saver = document.getElementById("previous")
function save(){
   saver.textContent += count + " - " 
   count=0;
   counter.innerText=0;
}