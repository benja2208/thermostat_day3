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

