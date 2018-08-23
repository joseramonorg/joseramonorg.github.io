
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;
var invalidKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '', '¡', '`', '+', '´', 'ç', ',', '.', '.', '-', '<']
var invalidData = alert["Your choice is not a valid letter, duh!!!"]

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	farUserGuesses();
	countGuessesLeft();
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}  
	// En el renglón 30 no estoy cumpliendo con el DRY (DON'T repeat yourself, pero no ubico la forma de optimizarlo
	// Pensaba omitir la linea de código 29 pero no hacía el restart al 100, no generaba la nueva elección de la compu
	// De tal forma que tuve que repetir la función para generala dentro de la función restart.
	// Las siguientes lineas de código muestran las validaciones para no repetir ni poner numeros o simbolos.
	
	var userGuess;

document.onkeyup = function(event) {

	if((event.keyCode>64 && event.keyCode<91) ||  (event.keyCode>96 && event.keyCode<123) ){
		if(letterUser.includes(String.fromCharCode(event.keyCode).toLowerCase())){
			alert("Your choice is a repeated letter, duh!!!");
		}else{
			guessesLeft--;
 			userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 			letterUser.push(userGuess);
			countGuessesLeft();
			farUserGuesses();
		}
	}else{
			alert("Your choice is not a letter, duh!!!");

	}

	//User wins or user loses, with the alert that shows the option that the computer was thinking
	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		alert("You win!!!!!!!!!!!!!, the letter was " +userGuess);
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		alert("Try again. You lose, the letter was " +computerGuess);
		restart();
	}

	if (userGuess== invalidKeys){
	invalidData
	}

  };