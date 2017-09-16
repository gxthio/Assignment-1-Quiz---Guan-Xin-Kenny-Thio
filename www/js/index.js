/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 

/*************************************************************/
//navigation code for the navigation toolbar

//global variable
var url = "http://introtoapps.com/datastore.php?action=load&appid=214500003&objectid=questions";
var score = 0; //quiz score

document.addEventListener('init', function(event) {
  var page = event.target;
  score = 0;
  var options = document.getElementsByName("c1");
  
  //variables for getting local storage username and password
  var getUser = localStorage.getItem("#username");
  var getPass = localStorage.getItem("#psw");				
  
			
//***********************************************
//Main page navigation to Topic page

  if (page.id === 'Main') {
		  
    page.querySelector('#push-button').onclick = function() {
			
		//variavles for login username and passwords values	
		var muser = document.getElementById("musername").value;
		var mpass = document.getElementById("mpassword").value;
		
		if(muser != getUser && mpass != getPass)
		{	
			  document.getElementById("lerror").innerHTML = "ERROR";
		}
		else
		{	
		
			document.querySelector('#myNavigator').pushPage('topic.html', {data: {title: 'Topic'}});
		}
		
		
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
	    
		//variables for registration username and password value
		var ruser = document.getElementById("rusername").value;
		var rpass = document.getElementById("rpsw").value;
		
		//check whether local storage is undefined and if username and password inputs are empty
		if(typeof(Storage)!="undefined" && ruser !== "" && rpass !== "")
		{
			  //store the data into local storage
			  localStorage.setItem("#username", ruser); 
			  localStorage.setItem("#psw", rpass);
			  
			  //go back to main page
			  document.querySelector('#myNavigator').pushPage('index.html', {data: {title: 'Main'}});
			  
			  //reload the page
			  window.location.reload();
		}
		else
		{
			//display error message if username & password fields are empty
			document.getElementById("error").innerHTML = "ERROR";
		}
      
    };
  } 
  
//*********************************************
//********************************************



//*********************************************
//Topic page navigation to 1st quiz page

 if (page.id === 'Topic')
{
	page.querySelector('#cquest-button').onclick = function() 
	{
      	document.querySelector('#myNavigator').pushPage('cquest.html', {data: {title: 'Cquest'}});
    };
  } 

//*************************************************
//************************************************
//1st quiz page navigation to result page

if (page.id === 'Cquest')
{
	
	
	
	
		$.getJSON(url, function(data) {
		
		var ques = $("#question");	//variable for div id "question"			
		
		
		//for loop for creating questions from JSON 
		for(var h = 0; h < 7;){
			ques.append('<h3>'+ data[h].q + '</h3>'); //append the data onto div id question
			
		//each question have 4 choices	
		for(var i = 0; i < data[h].choice.length; i++){
			ques.append('<label><input type="radio" name="Qoptions'+ h +'" value="' + i + '" /> <b>' + data[h].choice[i] + '</b></label><br>');
	        
			}
			h++;
		}

		});
	
	

	page.querySelector('#submit-button').onclick = function() 
	{
		score = 0;
		window.alert(score);
		
		$.getJSON(url, function(ans) {	
		
		
			
		for(var h = 0; h < 7;h++){
			
		var answers = ans[h].answer;
		
		var selectedText = document.getElementsByName("Qoptions"+ h);
			
		var limit = document.getElementsByName("Qoptions"+ h).length;	
		
		var selection = -1;
		
		//check choice button for all checked radio buttons
		for(var i = 0;i < limit;i++)
		{
			if(selectedText[i].checked == true)
			{
				selection = i;
			}
		
		}
		
		//add score for all correct answers for each questions
		if(selection > -1 && selectedText[selection].value == answers - 1) {;
						score +=1;
					}
					else 
					{
						score += 0;
					}
		}
		
		});		
		
		
      	document.querySelector('#myNavigator').pushPage('result.html', {data: {title: 'Result'}});
    };
  } 
//***************************************************
//***************************************************





//*******************************************************

//********************************************************
//Result page navigation to main/home page

if (page.id === 'Result') {

	page.querySelector('#view-button').onclick = function() {
	getCscore();
	
	};
    page.querySelector('#return-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('index.html', {data: {title: 'Main'}});
	  //reload the page
		window.location.reload();
    };
  }

//**********************************************************




});
/****************************************************************/
function getCscore(){
	
	window.alert("score: " + score);
	document.getElementById("date").innerHTML = Date();
	document.getElementById("Scores").innerHTML = (score+"/7");
	
}
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
//JS Code reference
//function to apply  data from JSON file 



/************************************************************/

app.initialize();