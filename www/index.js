/*************************************************************/
//navigation code for the navigation toolbar

document.addEventListener('init', function(event) {
  var page = event.target;

//***********************************************
//Main page navigation to Topic page

  if (page.id === 'Main') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('topic.html', {data: {title: 'Topic'}});
    };
  } else if (page.id === 'Topic') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

  }
//********************************************
//********************************************
//Main page navigation to Profile page

if (page.id === 'Main') {
    page.querySelector('#profile-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('profile.html', {data: {title: 'Profile'}});
    };
  } else if (page.id === 'Profile') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

  }


if (page.id === 'Profile') {
    page.querySelector('#register-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('index.html', {data: {title: 'Main'}});
    };
  } 
  
//*********************************************

//*********************************************
//Topic page navigation to 1st quiz page

 if (page.id === 'Topic')
{
	page.querySelector('#cquest-button').onclick = function() 
	{
      	document.querySelector('#myNavigator').pushPage('cquest.html', {data: {title: 'Cquest'}});
    };
  } 

//Topic page navigation to 2nd quiz page
 if (page.id === 'Topic')
{
	page.querySelector('#xam-button').onclick = function() 
	{
      	document.querySelector('#myNavigator').pushPage('xquest.html', {data: {title: 'Xquest'}});
    };
  } 
//*************************************************
//************************************************
//1st quiz page navigation to result page

if (page.id === 'Cquest')
{
	page.querySelector('#submit-button').onclick = function() 
	{
      	document.querySelector('#myNavigator').pushPage('result.html', {data: {title: 'Result'}});
    };
  } 
//***************************************************
//***************************************************
//2nd quiz page navigation to result page
if (page.id === 'Xquest')
{
	page.querySelector('#submit-button').onclick = function() 
	{
      	document.querySelector('#myNavigator').pushPage('result.html', {data: {title: 'Result'}});
    };
  } 
//*******************************************************

//********************************************************
//Result page navigation to main/home page

if (page.id === 'Result') {
    page.querySelector('#return-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('index.html', {data: {title: 'Main'}});
    };
  }

//**********************************************************




});
/****************************************************************/

/**************************************************/
//these 2 functions creates the options for a dropdown box

function editSelects(event) {
  document.getElementById('choose-sel').removeAttribute('modifier');
  if (event.target.value == 'male' || event.target.value == 'female') {
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  }
}

function addOption(event) {
  const option = document.createElement('option');
  let text = document.getElementById('optionLabel').value;
  option.innerText = text;
  text = '';
  document.getElementById('dynamic-sel').appendChild(option);
}
/***************************************************************/

/***************************************************************/
//this function check each question and display a alert when the //user left out a question

function checkQ()
{
  
  //User Input
	var q1 = document.forms["quizForm"]["c1"].value;
	var q2 = document.forms["quizForm"]["c2"].value;
	var q3 = document.forms["quizForm"]["c3"].value;

//checks each question to see whether they are empty
	//if any question is left empty, display a alert to notify
	//the user

		for(i=1;i<= total;i++)
	{
		if(eval('q'+i)=== null || eval('q'+i)==='')
		{
			ons.notification.alert({message: 'You missed a question'});
			return false;

		}
	  	else
 		{

		//enables the button once all questions have been 			//answered
    		document.getElementById('submitbutton').disabled=false;
  		}


	} 


	
  
  
}
/***********************************************************/

/**********************************************************/
//this function calculates and display the score on screen

function calAnswers(){
	var total = 3;
	var score = 0;

	//User Input
	var q1 = document.forms["quizForm"]["c1"].value;
	var q2 = document.forms["quizForm"]["c2"].value;
	var q3 = document.forms["quizForm"]["c3"].value;

	

	for(i=1;i<= total;i++)
	{
		if(eval('q'+i)=== null || eval('q'+i)==='')
		{
			return false;

		}
	} 

//set correct answer
var answers = ["b","a","d"];

//check correct answers for each question

	for(j=1;j<=total;j++)
{
	if(eval('q'+i)===answers[j-1])
	{
		score++
	}

}

//display result on screen 
if(score>=0)
{
document.getElementById("Scores").innerHTML = ('<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>');
}


return false;
}
/************************************************************/

app.initialize();