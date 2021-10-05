let a=20
let b=10

let res = document.getElementById("result")
function add(){
    let c=a+b
    res.textContent="Sum = " + c 
}

function sub(){
    let c=a-b
    res.textContent="Sub = "+c 
}

function div(){
    let c=a/b
    res.textContent="Div = "+c 
}

function mul(){
    let c=a*b
    res.textContent="Mul = "+c 
}