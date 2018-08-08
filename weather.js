var getWeather = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        showWeather(lat, long)
      })
    }
       else {
            window.alert("Could not get location");
      }
}

function functionfarenheitToCelsius(k)
{
    return Math.round((k-32)*0.5556);
}

function humidityPercentage(h)
{
    return Math.round(h * 100);
}

function degreesToDirection(degrees) {
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    for (i in angles) {

        if(degrees>= low && degrees < high)
            return angles[i];

        low = (low + range) % 360;
        high = (high + range) % 360;
    }
}

var weatherImages = {
    "clear-day": "clear-day.svg",
    "clear-night": "clear-night.svg",
    "rain": "rain.svg",
    "snow": "snow.svg",
    "sleet": "sleet.svg",
    "wind": "wind.svg",
    "fog": "fog.svg",
    "cloudy": "cloudy.svg",
    "partly-cloudy-day": "partly-cloudy-day.svg",
    "partly-cloudy-night": "partly-cloudy-night.svg",
    "hail": "hail.svg",
    "thunderstorm": "thunderstorm.svg",
    "tornado": "tornado.svg"
}
  
  
var object;
  
   function displayWeather(object) {
      humidity.innerHTML = "Humidity: " + humidityPercentage(object.currently.humidity) + "%";
      weatherIcon.src = "images/" + weatherImages[object.currently.icon];
      pressure.innerHTML = "Pressure: " + object.currently.pressure + " mb";
      uvIndex.innerHTML = "uvIndex: " + object.currently.uvIndex;
      temperatureIcon.src = "images/thermometer.svg";
      temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C" + " / " + object.currently.temperature + " F";
      windBearing.innerHTML = "Wind Direction: " + degreesToDirection(object.currently.windBearing);
      windSpeed.innerHTML = "Wind Speed: " + knotsToKilometres(object.currently.windSpeed) + " km/h";
      weatherSummary.innerHTML = "Current Location: " + object.timezone + " <br/> <br/> Weather Summary: " + object.currently.summary;
      document.getElementById("current-icon").style.backgroundColor = "#002db3"; 
      document.getElementById("weather-summary").style.backgroundColor = "#002db3"; 
      console.log(object);
  
}
  
   var humidity;
   var weatherIcon;
   var pressure;
   var uvIndex;
   var temperature;
   var temperatureIcon;
   var windBearing;
   var windSpeed;
   var weatherSummary;
   
   window.onload = function() {
     humidity = document.getElementById("current-humidity");
     weatherIcon = document.getElementById("current-icon");
     pressure = document.getElementById("current-pressure");
     uvIndex = document.getElementById("current-uvIndex");
     temperature = document.getElementById("current-temperature");
     temperatureIcon = document.getElementById("temperature-icon");
     windBearing = document.getElementById("current-wind-bearing");
     windSpeed = document.getElementById("current-wind-speed");
     weatherSummary = document.getElementById("weather-summary");
   }
   
   function showWeather(lat, long) {
    var url = `https://api.darksky.net/forecast/695544473a2dd8009951c9bddec71282/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
       var script = document.createElement("script");
       script.type = "text/javascript";
       script.src = url;
       document.getElementsByTagName("head")[0].appendChild(script);
       displayWeather(object)   
     }
   
   var object;
   
    function displayWeather(object) {
       humidity.innerHTML = "Humidity: " + humidityPercentage(object.currently.humidity) + "%";
       weatherIcon.src = "images/" + weatherImages[object.currently.icon];
       pressure.innerHTML = "Pressure: " + object.currently.pressure + " mb";
       uvIndex.innerHTML = "uvIndex: " + object.currently.uvIndex;
       temperatureIcon.src = "images/thermometer.svg";
       temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C" + " / " + object.currently.temperature + " F";
       windBearing.innerHTML = "Wind Direction: " + degreesToDirection(object.currently.windBearing);
       windSpeed.innerHTML = "Wind Speed: " + knotsToKilometres(object.currently.windSpeed) + " km/h";
       weatherSummary.innerHTML = "Current Location: " + object.timezone + " <br/> <br/> Weather Summary: " + object.currently.summary;
       document.getElementById("current-icon").style.backgroundColor = "#002db3"; 
       document.getElementById("weather-summary").style.backgroundColor = "#002db3"; 
       console.log(object);
   
    }

function knotsToKilometres(knot) {
  return Math.round(knot * 1.852);
}

function showWeather(lat,long)
{
    var url = `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(object);
}