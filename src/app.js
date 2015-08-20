thermostat = new Thermostat();

temperatureColor = function(){
	if (thermostat.temperature < 18){
		temperature.style.color = "green"
	}
	else if (thermostat.temperature < 25) {
		temperature.style.color = "gold"
	}
	else {
		temperature.style.color = "red"
	}
};

$ (document).ready(function(){
  
  $("#temperature").show(function() {
    temperature.innerHTML = thermostat.showtemp();
    temperatureColor();
  });

  $("#increase").click(function(){
	  thermostat.increaseTemperature();
		temperature.innerHTML = thermostat.temperature;
		temperatureColor();
  })

  $("#decrease").click(function(){
	  thermostat.decreaseTemperature();
		temperature.innerHTML = thermostat.temperature;
		temperatureColor();
  })

  $("#reset").click(function(){
		thermostat.reset();
		temperature.innerHTML = thermostat.temperature;
		temperatureColor();
  })

  $("#power_saving_mode").change(function(){
		thermostat.switchPowerSavingMode();
  })


 

	$("#getWeather").click(function(){
		var userCity= $("#city").val();
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ userCity +"&units=metric",function(result){
      	$("#weatherdata").html("City: " + result.name)
      	$("#weatherdata").append("<br>Weather: "+ result.weather[0].main);
      	$("#weatherdata").append("<br>Temperature(°C): "+ result.main.temp);
      	// $("#temperature").html("<br>Temp: "+ result.main.temp);

    	});
	});

})





// Weather.getCurrent("Kansas City", function(current) {
//   console.log(
//     ["currently:",current.temperature(),"and",current.conditions()].join(" ")
//   );
// });
 
// Weather.getForecast("Kansas City", function(forecast) {
//   console.log("forecast high: " + forecast.high());
//   console.log("forecast low: " + forecast.low());
// });

