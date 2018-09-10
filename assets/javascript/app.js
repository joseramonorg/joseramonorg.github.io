var questionLibrary = {

    question1: {
        questionAsked: "In which period occured the Mexican Independence? ",
        answers: {
            answers1: {
                answersText: "1910-1921",
                answersCorrect: false,
            },
            answers2: {
                answersText: "1810-1817",
                answersCorrect: false,
            },
            answers3: {
                answersText: "1810-1821",
                answersCorrect: true,
            },
            answers4: {
                answersText: "1910-1932",
                answersCorrect: false,
            },

        },
    },
    question2: {
        questionAsked: "Where is located Alondiga de Granaditas?",
        answers: {
            answers1: {
                answersText: "Dolores Hidalgo, Guanajuato",
                answersCorrect: false,
            },
            answers2: {
                answersText: "Guanajuato, Guanajuato",
                answersCorrect: true,
            },
            answers3: {
                answersText: "Querétaro, Querétaro",
                answersCorrect: false,
            },
            answers4: {
                answersText: "Dolores Hidalgo, Guanajuato",
                answersCorrect: false,
            },

        },
    },
    question3: {
        questionAsked: "Who is considered as the best Mexican President because of the economic boom ?",
        answers: {
            answers1: {
                answersText: "Antonio López de Santa Ana",
                answersCorrect: false,
            },
            answers2: {
                answersText: "Guadalupe Victoria",
                answersCorrect: false,
            },
            answers3: {
                answersText: "Porfirio Díaz",
                answersCorrect: true,
            },
            answers4: {
                answersText: "Putarco Elías Calles",
                answersCorrect: false,
            },

        },
    },
    question4: {
        questionAsked: "Who is La Corregidora de Querétaro?",
        answers: {
            answers1: {
                answersText: "Josefa Ortiz de Dominguez",
                answersCorrect: true,
            },
            answers2: {
                answersText: "Leona Vicario",
                answersCorrect: false,
            },
            answers3: {
                answersText: "Sor Juana Inés de la Cruz",
                answersCorrect: false,
            },
            answers4: {
                answersText: "Carlota de Habsburgo",
                answersCorrect: false,
            },

        },
    },
    question5: {
        questionAsked: "Which of the following is considered a Wonder Of The World",
        answers: {
            answers1: {
                answersText: "Teotihuacan Pyramids",
                answersCorrect: false,
            },
            answers2: {
                answersText: "Bellas Artes Palace",
                answersCorrect: false,
            },
            answers3: {
                answersText: "Tulum Ruins",
                answersCorrect: false,
            },
            answers4: {
                answersText: "Chichén Itza Pyramid",
                answersCorrect: true,
            },

        },
    },
}

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;
// selected answer value
var selectedAnswers = "not selected";
var round = 0;
var roundAnswersArray = ["1810-1821", "Dolores Hidalgo, Guanajuato", "Porfirio Díaz", "Josefa Ortiz de Dominguez", "Chichén Itza Pyramid"]
// logs the pictures in the same screen
var roundPicArray = ['../assets/images/1810-1821.jpg', '../assets/images/guanajuato.jpg', '../assets/images/porfirio.jpg', '../assets/images/josefa.jpg', '../assets/images/chichen-itza.jpg',]


var timeRemaining = 30;
//timeouts 
var questionNotAnswered = "";
//end game counter
var newGameCountdown = "";
var intervalId;
var clockRunning = false;


//hides the game and resets the things for next round
 newGame = function (){
    $("#gameOverArea").addClass("hidden");
    $("#pregameArea").removeClass("hidden");
    correctAnswers = 0;
	incorrectAnswers = 0;
	unansweredAnswers = 0;
	selectedAnswers;
	round = 0;
}

//hides the pregame area and pulls up the first question
onStart = function() {
    $("#pregameArea").addClass("hidden");
    $("#questionArea").removeClass("hidden");
    nextQuestion();
}

//begins the question phase.
nextQuestion = function() {
	//start the clock 
	if (!clockRunning) {
		run();
	    clockRunning = true;
	}
	//sets the 30 second time limit
    questionNotAnswered = setTimeout(addToUnanswered, 31000)
    //increase and reset variables as needed for the question phase
    round++;
    timeRemaining = 30;
    selectedAnswers = "not selected";
    //display the information in the question area
    $("#answerArea").addClass("hidden");
    $("#questionArea").removeClass("hidden");
    $("#timeRemainingText").html("Time remaining: " + timeRemaining);
    $("#questionText").html(questionLibrary["question" + round].questionAsked);
    $("#answer1Text").html(questionLibrary["question" + round].answers.answers1.answersText);
    $("#answer2Text").html(questionLibrary["question" + round].answers.answers2.answersText);
    $("#answer3Text").html(questionLibrary["question" + round].answers.answers3.answersText);
    $("#answer4Text").html(questionLibrary["question" + round].answers.answers4.answersText);
}

//game over screen.  Lasts for 30 seconds until kicking the player back to the pregame screen.
gameOver = function() {
	if (!clockRunning) {
		run();
		clockRunning = true;
	}
    timeRemaining = 30;
    $("#answerArea").addClass("hidden");
    $("#gameOverArea").removeClass("hidden");
    $("#timeRemainingTextGameOver").html("Time Remaining: " + timeRemaining + " seconds");
    $("#correctAnswered").html("Correct Answers: " + correctAnswers);
    $("#incorrectAnswered").html("Incorrect Answers: " + incorrectAnswers);
    $("#unansweredAnswered").html("Unanswered: " + unansweredAnswers);
    newGameCountdown = setTimeout(newGame, 30000)
}

//when a learner answers a question, they're pulled to the following screen
onAnswer = function() {
	//stops the countdown so they can see how much time they had left when they answeres the question
	stop();
	//switches game area and shows relevant information and picture
    $("#questionArea").addClass("hidden");
    $("#answerArea").removeClass("hidden");
    $("#timeRemainingTextAnswers").html("Time remaining: " + timeRemaining);
    $("#correctAnswer").html("The correct answer was: " + roundAnswersArray[round - 1]);
    $("#image-holder").html("<img src='"+roundPicArray[round - 1]+"' height='300px' width='400px' />");


    //logic to determine if the answer that was selected was correct or incorrect.  also increases correct or incorrect count
    if (selectedAnswers === true) {
        $("#answerCorrectIncorrect").html("Correct!");
        correctAnswers++;
    } 
    else if (selectedAnswers === false) {
        $("#answerCorrectIncorrect").html("Wrong!");
        incorrectAnswers++;
    }
    //we need the game to kick us to the game over screen if we are out of questions.  
    if (round < Object.keys(questionLibrary).length) {
        setTimeout(nextQuestion, 3000);
    } else {
        setTimeout(gameOver, 3000);
    }
}

//if a question is unanswered. This is the function on our set interval in nextQuestion()
addToUnanswered = function () {
	$("#answerCorrectIncorrect").html("Out of Time!");
	unansweredAnswers++;
	onAnswer();
}

//Stops the timeremaining countdown and sets clockrunning to false.  
stop = function () {
	clearInterval(intervalId);
	clockRunning = false;
}

//sets our intervalId to run the decrement function every second
run = function () {
  intervalId = setInterval(decrement, 1000);
}

//what happens every second through the interval.  
decrement = function () {
  timeRemaining--;
$("#timeRemainingText, #timeRemainingTextGameOver, #timeRemainingTextAnswers").html("Time remaining: " + timeRemaining);
  if (timeRemaining === 0) {
    stop();
  }
}

//listeners on the buttons and text we need to click.

$("#startButton").on("click", function() {
    onStart();
});

$("#answer1Text").on("click", function() {
    selectedAnswers = questionLibrary["question" + round].answers.answers1.answersCorrect;
    clearTimeout(questionNotAnswered);

    onAnswer();
});

$("#answer2Text").on("click", function() {
    selectedAnswers = questionLibrary["question" + round].answers.answers2.answersCorrect;
    clearTimeout(questionNotAnswered);
    onAnswer();
});

$("#answer3Text").on("click", function() {
    selectedAnswers = questionLibrary["question" + round].answers.answers3.answersCorrect;
    clearTimeout(questionNotAnswered);
    onAnswer();
});

$("#answer4Text").on("click", function() {
    selectedAnswers = questionLibrary["question" + round].answers.answers4.answersCorrect;
    clearTimeout(questionNotAnswered);
    onAnswer();
});

$("#startOverText").on("click", function() {
    clearTimeout(newGameCountdown);
    newGame();
});