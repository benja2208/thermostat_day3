

$(document).ready(function(){
	var userCity= $("#city").val();


	$("#getWeather").click(function(){
	    jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + "userCity" ,function(result){
        alert("City: "+result.city.name);
        alert("Weather: "+ result.list[0].weather[0].description);
        alert("Weather: "+ result.list[0].weather[0].temp);
        });
	  });
});

