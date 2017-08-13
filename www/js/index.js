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

document.addEventListener('init', function(event) {
  var page = event.target;

	var options = document.getElementsByName("c1");
  
  
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

	$.getJSON("http://localhost:3000/question", function(data){
			
					var i = [1, 2, 3, 4];
			
					$("#quizlist").append(data[0].q + "<br>"); //append the data onto div id quizlist
					
					$.each( data, function( i, v ) {
						$.each( data, function( i, x ) {
							$("#c" + i ).append(x.choice + "<br>"); //append the data onto each radio button
				});
			 });	
    });
	
	page.querySelector('#submit-button').onclick = function() 
	{
      	document.querySelector('#myNavigator').pushPage('result.html', {data: {title: 'Result'}});
    };
  } 
//***************************************************
//***************************************************





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
//JS Code reference
//function to apply  data from JSON file 



/************************************************************/

app.initialize();