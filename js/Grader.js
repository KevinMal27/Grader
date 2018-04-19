function gradeResult() {

	var myEnglishResult = parseInt(document.getElementById("EnglishGrade").value);
	var myIrishResult = parseInt(document.getElementById("IrishGrade").value);
	var myMathsResult = parseInt(document.getElementById("MathsGrade").value);
	var EnglishGrade, IrishGrade, MathsGrade;
	
	if (!myEnglishResult)
			alert("Please enter a result");
		else if (myEnglishResult < 0 || myEnglishResult > 100)
			alert("Please enter a valid grade between 0 and 100 plez") 
		else if (myEnglishResult > 90) 
			Englishgrade = 'A';
		else if (myEnglishResult > 80) 
			Englishgrade = 'B';
		else if (myEnglishResult > 70) 
			Englishgrade = 'B-';
		else if (myEnglishResult > 60) 
			Englishgrade = 'C';
		else if (myEnglishResult > 50) 
			Englishgrade = 'C-';
		else if (myEnglishResult > 40) 
			Englishgrade = 'D';
		else if (myEnglishResult < 40)  
			Englishgrade = 'F';
		
		
		if (!myIrishResult)
			alert("Please enter a result");
		else if (myIrishResult < 0 || myIrishResult > 100)
			alert("Please enter a valid grade between 0 and 100 plez") 
		else if (myIrishResult > 90) 
			IrishGrade = 'A';
		else if (myIrishResult > 80) 
			IrishGrade = 'B';
		else if (myIrishResult > 70) 
			IrishGrade = 'B-';
		else if (myIrishResult > 60) 
			IrishGrade = 'C';
		else if (myIrishResult > 50) 
			IrishGrade = 'C-';
		else if (myIrishResult > 40) 
			IrishGrade = 'D';
		else  if(myIrishResult < 40) 
			IrishGrade = 'F';
		
		
		if (!myMathsResult)
			alert("Please enter a result");
		else if (myMathsResult < 0 || myMathsResult > 100)
			alert("Please enter a valid grade between 0 and 100 plez") 
		else if (myMathsResult > 90) 
			Mathsgrade = 'A';
		else if (myMathsResult > 80) 
			Mathsgrade = 'B';
		else if (myMathsResult > 70) 
			Mathsgrade = 'B-';
		else if (myMathsResult > 60) 
			Mathsgrade = 'C';
		else if (myMathsResult > 50) 
			Mathsgrade = 'C-';
		else if (myMathsResult > 40) 
			Mathsgrade = 'D';
		else if (myMathsResult < 40) 
			Mathsgrade = 'F';
		
		
	
		
		var message1 = 'Your result of ' + myEnglishResult + ' gets you a grade ' + Englishgrade;
		var message2 = 'Your result of ' + myIrishResult + ' gets you a grade ' + IrishGrade;
		var message3 = 'Your result of ' + myMathsResult + ' gets you a grade ' + Mathsgrade;

		console.log(message1);
		document.getElementById("myEnglishresult").innerHTML = message1;
		document.getElementById("myIrishresult").innerHTML = message2;
		document.getElementById("myMathsresult").innerHTML = message3;
	

}