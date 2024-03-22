//variable declaration


let cards=[] //// array - ordered list of items
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let player={
  name:"Humira",
  chips:145

}

//selectors

let messageEl = document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");

//random card picking function
function getRandomCard(){
  let randomNumber=Math.floor(Math.random()*13)+1;// returning a range of number from 1 to --
 
  if(randomNumber>10){
    return 10

  }else if(randomNumber===1){
    return 11
  }else{
    return randomNumber
  }

}

//on-click function
function startGame(){
  isAlive=true;
  let firstCard=getRandomCard();
  let secondCard=getRandomCard();
  cards=[firstCard,secondCard];
  sum=firstCard+secondCard;
  renderGame()
}



function renderGame() {
//renderout first and second card
  cardsEl.textContent="Cards: ";

    
    for(i=0;i<cards.length;i++){
      cardsEl.textContent+=cards[i]+" ";
      

    }

  //render out all cards
    sumEl.textContent="Sum: "+sum;
    
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    hasAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {

  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  
  if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    console.log(cards)
    renderGame()
  }
  

}
//show player's name and point

playerEl.textContent=player.name+" $"+ player.chips;
