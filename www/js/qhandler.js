//function to apply  data from JSON file 
$(document).ready(function() {
		//get the JSON data from the URL
			$.getJSON("http://localhost:3000/question", function(data){
				 $.each(data, function(i, field){
					$("#quizlist").append(field.q + "<br>"); //append the data onto div id quizlist
           });
      
    });
});