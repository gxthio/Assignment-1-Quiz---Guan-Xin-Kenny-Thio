//navigation
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'Main') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('profile.html', {data: {title: 'Profile'}});
    };
  } else if (page.id === 'Profile') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

  }

});


//user profile
var enter = function() {
  var surname = document.getElementById('surname').value;
  var given = document.getElementById('given').value;

  if (surname  === ' ' || given === ' ') {
    ons.notification.alert('User Input not given');
  }
  else {
	ons.notification.alert('User Input has been given');	
      }
};

function editSelects(event) {
  document.getElementById('choose-sel').removeAttribute('modifier');
  if (event.target.value == '17' || event.target.value == '18') {
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


app.initialize();