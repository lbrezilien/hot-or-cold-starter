
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});





	var realNumber = 0;
	var counter = 0;


	var newGame = function(){
		counter = 0;
		realNumber = Math.floor(Math.random() * 100)+1;
		document.getElementById("feedback").innerHTML = "Make Your Guess!";
		document.getElementById("guessList").innerHTML = " ";
		document.getElementById("count").innerHTML = counter;


	};
    
	newGame();


	var button = document.getElementById("guessButton");
		
		button.addEventListener("click", function (){
		

		var userinput = parseInt(document.getElementById("userGuess").value);

		var message ;

		if ( userinput == realNumber){ message = " Good Job you did it"}
		else if (Math.abs(userinput - realNumber) > 30){ var message = " You're colder than cold "}
		else if (Math.abs(userinput - realNumber) <= 30 && Math.abs(userinput - realNumber) > 10 ){  message = " You're getting closer"}
		else if (Math.abs(userinput - realNumber) <= 10 && Math.abs(userinput - realNumber) > 2 ){ message = " You're hot, now im scared"}
		else if (Math.abs(userinput - realNumber) <= 2){ message = " If you don't get this by next turn, something wrong with you"}
		else { message = " skjdksjhdsk "}
		
		counter++;

		var li = document.createElement("li");
		var guesslist = document.createTextNode(userinput);
		li.appendChild(guesslist);
		document.getElementById("guessList").appendChild(li);
		document.getElementById("feedback").innerHTML = message
		document.getElementById("guessList").appendChild(li);
		document.getElementById("count").innerHTML = counter;



	}, false);
	


