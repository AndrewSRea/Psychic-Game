/*JavaScript definitions below are from the Wiley book, "JavaScript & jQuery."*/

//getElementById selects an id element and stores it in a variable//
var psychWins = document.getElementById("psychWins");
var psychLoss = document.getElementById("psychLoss");
var guessRemain = document.getElementById("guessRemain");
var numberGuess = document.getElementById("numberGuess");
//creating an array with all keyable letters inside it//
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
	"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//creating variables for the amount of wins and losses, count starting at 0//
//(guesses starting at 9 and counting down)//
var winsCount = 0;
var lossesCount = 0;
var defaultGuessRemain = 9;
var guessRemainCount = defaultGuessRemain; //variable guessRemainCount is equal to defaultGuessRemain (starting at 9)
var guessArray = []; //amount of guesses go into the empty guessArray

//setting var getRandomLetter stores the random letter generated by the "[Math.floor(Math.random..." equation//
//the allLetters.length array number is 26 (letters in the alphabet)//
//Math.random generates a number between 1 and 26--each letter assigned a number in the array//
//Math.floor is used to specifically round a number down (to the assigned array numbers, 0 to 25)//
//number, or rather, assigned letter, gets stored in randomLetter//
var getRandomLetter = function () {
	randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
	console.log(randomLetter);
	return randomLetter
}	

//.innerHTML is used both to retrieve and replace content in an associated element (psychWins, etc.)//

var displayStats = function () {
	psychWins.innerHTML = "Number of Wins: " + winsCount
	psychLoss.innerHTML = "Number of Losses: " + lossesCount
	guessRemain.innerHTML = "Remaining Guesses: " + guessRemainCount
	numberGuess.innerHTML = "Number of Guesses: " + guessArray
}
var resetGame = function () {
	guessArray = [];
	guessRemainCount = defaultGuessRemain;
	currentLetter = getRandomLetter();
}
var userWon = function (userLetter) {
	return userLetter === currentLetter 
}
var userLost = function () {
	return guessRemainCount === 0;
}
var currentLetter = getRandomLetter();
displayStats();
document.onkeyup = function (event) {
	var userLetter = event.key;
	guessRemainCount--
	guessArray.push(userLetter)
	if (userWon(userLetter)) {
		winsCount++;
		resetGame();
	} 
	if (userLost()) {
		lossesCount++;
		resetGame();
	}
	displayStats();
}
