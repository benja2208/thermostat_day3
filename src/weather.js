

$(document).ready(function(){
	$("#getWeather").click(function(){
	    jQuery.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=Montpellier&mode=json&units=metric&cnt=10",function(result){
        alert("City: "+result.city.name);
        alert("Weather: "+ result.list[0].weather[0].description);
        });
	  });
});

