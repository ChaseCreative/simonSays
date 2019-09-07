
//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "Command Performance!";
    var game2Title = get("answerTwo").innerHTML = "";
    var game3Title = get("answerThree").innerHTML = "";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "SimonSays";}

function gameTitle() {get("startButton").innerHTML = "Simon Says!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();







var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];



var infinitiveEndings = [["āre", "āri"],["ēre","ēri"],["ere","i"],["īre", "īri"]];

var firstImperative = [["am", "love"], ["labor", "work"], ["habit", "live"], ["cogit", "think"], ["cant", "sing"], ["d", "give"],["laud", "praise"],["serv", "save"],["voc", "call"],["err", "wander"], ["conserv", "preserve"]];

var secondImperative = [["terr", "frighten"], ["deb", "owe"], ["mon", "warn"], ["vid", "see"], ["sed", "sit"], ["hab", "have"],["ten", "hold"],["tim", "fear"],["val", "be strong"],["salv", "be well"],["man", "stay"]];

var imperativeEndings = [["ā","āte"],["ē","ēte"]];


var firstVocative = [["Puell", "Girl"], ["Ancill", "Maid servant"], ["Agricol", "Farmer"], ["Naut", "Sailor"], ["Poet", "Poet"]];

var firstVocativePlural = [["Puell", "Girls"], ["Ancill", "Maid servants"], ["Agricol", "Farmers"], ["Naut", "Sailors"], ["Poet", "Poets"]];

var secondVocative = [["Serv", "Servant"], ["Domin", "Master"],["Amīc", "Friend"],["Coqu", "Cook"]];

var vocativeEndings = [["a", "ae"],["e","i"]];

var irregularSecondVocative = [["Marce", "Marcus"], ["Sexte", "Sextus"],["Fili", "Son"],["Luci", "Lucius"],["Caecili", "Caecilius"],["Puer", "Boy"],["Vir", "Man"]];










//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){simonSays()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){imperfectTenseVerbShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){perfectTenseVerbShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){threeVerbTenseShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }



 function simonSays(){

 countDownTimer();
 	timeleft = 15;
 	countdown = setInterval(countDownTimer,1000);


 startButton.disabled = true;

 //shuffle(firstVocative);
 //shuffle(secondVocative);
 //shuffle(vocativeEndings);

 shuffle(firstImperative);
 shuffle(firstVocative);
 shuffle(secondImperative);
 shuffle(secondVocative);
 //shuffle(secondImperative);
 //shuffle(imperativeEndings);


 shuffle(answers);


 function shuffleFirstImperativesPlural(){
 document.getElementById("startButton").innerHTML = firstVocative[0][1] + "s, " + firstImperative[0][1] + "!";


 document.getElementById(answers[0]).innerHTML = firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + imperativeEndings[0][1] + "!";


 document.getElementById(answers[1]).innerHTML = firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + imperativeEndings[0][0] + "!";

 document.getElementById(answers[2]).innerHTML = firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + infinitiveEndings[0][0] + "!";

 document.getElementById(answers[3]).innerHTML = firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + infinitiveEndings[0][1] + "!";
 }



 function shuffleFirstImperatives(){
 document.getElementById("startButton").innerHTML = firstVocative[0][1] + ", " + firstImperative[0][1] + "!";


 document.getElementById(answers[0]).innerHTML = firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + imperativeEndings[0][0] + "!";


 document.getElementById(answers[1]).innerHTML = firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + imperativeEndings[0][1] + "!";

 document.getElementById(answers[2]).innerHTML = firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + infinitiveEndings[0][0] + "!";

 document.getElementById(answers[3]).innerHTML = firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + infinitiveEndings[0][1] + "!";
 }


 function shuffleSecondImperatives(){
 document.getElementById("startButton").innerHTML = secondVocative[0][1] + ", " + secondImperative[0][1] + "!";


 document.getElementById(answers[0]).innerHTML = secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!";


 document.getElementById(answers[1]).innerHTML = secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!";

 document.getElementById(answers[2]).innerHTML = secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + infinitiveEndings[1][0] + "!";

 document.getElementById(answers[3]).innerHTML = secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + infinitiveEndings[1][1] + "!";
 }


 function shuffleSecondImperativesPlural(){
 document.getElementById("startButton").innerHTML = secondVocative[0][1] + "s, " + secondImperative[0][1] + "!";


 document.getElementById(answers[0]).innerHTML = secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!";


 document.getElementById(answers[1]).innerHTML = secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!";

 document.getElementById(answers[2]).innerHTML = secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + infinitiveEndings[1][0] + "!";

 document.getElementById(answers[3]).innerHTML = secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + infinitiveEndings[1][1] + "!";
 }


function shuffleIrregularSecondVocative(){
 document.getElementById("startButton").innerHTML = irregularSecondVocative[0][1] + ", " + secondImperative[0][1] + "!";


 document.getElementById(answers[0]).innerHTML = irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!";


 document.getElementById(answers[1]).innerHTML = irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!";

 document.getElementById(answers[2]).innerHTML = irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + infinitiveEndings[1][0] + "!";

 document.getElementById(answers[3]).innerHTML = irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + infinitiveEndings[1][1] + "!";
 }


 var randomImperativeIndex = Math.floor(Math.random() * 5);
 var mixUp = [shuffleFirstImperatives, shuffleSecondImperatives, shuffleFirstImperativesPlural, shuffleSecondImperativesPlural, shuffleIrregularSecondVocative]

 mixUp[randomImperativeIndex]();






 	resetAnswerColors();

      enableButtons();



      //responseButton.innerHTML = "Hint!";

      //responseButton.disabled = false;


      //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


      //var newArray = shuffle(questions);

  	decrementCount();






 	if (count == 0){

 		gameOverAudio();

 		startButton.innerHTML = "Select a New Game!";




 		answerOne.innerHTML = game1Title;
 		answerTwo.innerHTML = game2Title;
 		answerThree.innerHTML = game3Title;
 		answerFour.innerHTML = game4Title;

 		document.getElementById("boxThree").innerHTML = "Score";
 		responseButton.innerHTML = "You earned " + points + " points!";
 		points = 0;

 		stopTimer();
 		document.getElementById("boxOne").innerHTML = "Timer";

 		answerOne.onclick = function(){selectGame1()};
 		answerTwo.onclick = function(){selectGame2()};
 		answerThree.onclick = function(){selectGame3()};
 		answerFour.onclick = function(){selectGame4()};

 		count = 11;


     }



 }
















   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + imperativeEndings[0][0] + "!" ||
		document.getElementById("answerOne").innerHTML == secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
		document.getElementById("answerOne").innerHTML == firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + imperativeEndings[0][1] + "!" ||
		document.getElementById("answerOne").innerHTML ==irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
    document.getElementById("answerOne").innerHTML == secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!"){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + imperativeEndings[0][0] + "!"||
		document.getElementById("answerTwo").innerHTML == secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
		document.getElementById("answerTwo").innerHTML == firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + imperativeEndings[0][1] + "!" ||
		document.getElementById("answerTwo").innerHTML ==irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
    document.getElementById("answerTwo").innerHTML == secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!"){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + imperativeEndings[0][0] + "!"||
		document.getElementById("answerThree").innerHTML == secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
		document.getElementById("answerThree").innerHTML == firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + imperativeEndings[0][1] + "!" ||
		document.getElementById("answerThree").innerHTML ==irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
    document.getElementById("answerThree").innerHTML == secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!"){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (

    document.getElementById("answerFour").innerHTML == firstVocative[0][0] + vocativeEndings[0][0] + ", " + firstImperative[0][0] + imperativeEndings[0][0] + "!"||
		document.getElementById("answerFour").innerHTML == secondVocative[0][0] + vocativeEndings[1][0] + ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
		document.getElementById("answerFour").innerHTML == firstVocative[0][0] + vocativeEndings[0][1] + ", " + firstImperative[0][0] + imperativeEndings[0][1] + "!" ||
		document.getElementById("answerFour").innerHTML ==irregularSecondVocative[0][0] +  ", " + secondImperative[0][0] + imperativeEndings[1][0] + "!" ||
    document.getElementById("answerFour").innerHTML == secondVocative[0][0] + vocativeEndings[1][1] + ", " + secondImperative[0][0] + imperativeEndings[1][1] + "!"){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
