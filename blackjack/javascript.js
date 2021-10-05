let a = randomcard()
let b = randomcard()
let cards = [a,b]
let sum = a+b
let results=document.getElementById("result")
let printmessage= document.getElementById("message")
let showcard=document.getElementById("cards")
let showsum=document.getElementById("sum")

function randomcard(){
    let number =  Math.floor(Math.random() * 13) + 1
      
    if(number===1){ 
        return 11
    } else if(number>10){
        return 10
    } else{
        return number
    }
}

function start(){
    getcard()
    getsum()

    if(sum<21){
      printmessage.textContent="Take another card!"
    } else if(sum===21){
        printmessage.textContent="You got Blackjack !!"
        results.textContent="Congratulations, You Win!"
    } else {
        printmessage.textContent="You're out of the game!"
        results.textContent="You Loose"
    }
} 

function newcard(){
    let c = randomcard()
    cards.push(c)
    start()
}

function getcard(){
    showcard.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
    showcard.textContent += cards[i] + " "
    }
}

function getsum(){
    sum=0
    for (let i = 0; i < cards.length; i++) {
      sum += cards[i]
    }
    showsum.textContent="Sum : " + sum
}

