
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},{
	rank: "king",
	suit: "hearts",
	cardImage:"images/king-of-hearts.png" 
},{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]
var cardsInPlay = [];
checkForMatch = function (){
	
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else {
		alert("Sorry, try again");
	}
}
flipCard = function () {
this.getAttribute('data-id');
console.log("User flipped" + cards[this.getAttribute('data-id')].rank)
console.log(cards[this.getAttribute('data-id')].suit);
console.log(cards[this.getAttribute('data-id')].cardImage);
cardsInPlay.push(cards[this.getAttribute('data-id')].rank);
this.setAttribute('src', cards[this.getAttribute('data-id')].cardImage)
if (cardsInPlay.length === 2){
checkForMatch();	
}
}
createBoard = function (){
	for (i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};


};
createBoard();
var reset = function(){
	window.location.reload();
}
button.addEventListener('click', reset);