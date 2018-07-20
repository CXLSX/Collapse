var questionOne = document.getElementById("question-1");
	var questionTwo = document.getElementById("question-2");
	var questionThree = document.getElementById("question-3");
	var answerOne = document.getElementById("answer-1");
	var answerTwo = document.getElementById("answer-2");
	var answerThree = document.getElementById("answer-3");


	function showAnswer(){
		if(answerOne.style.display === "none"){
			answerOne.style.display = "block";
			console.log("Question and Asnwer 1");
	
		} 
		else{
			answerOne.style.display = "none";
		}
	}

	function showAnswer2(){
		if(answerTwo.style.display === "none"){
			answerTwo.style.display = "block";
			console.log("Question and Asnwer 2");
	
		} 
		else{
			answerTwo.style.display = "none";
		}
	}

	function showAnswer3(){
		if(answerThree.style.display === "none"){
			answerThree.style.display = "block";
			console.log("Question and Asnwer 3");
	
		} 
		else{
			answerThree.style.display = "none";
		}
	}