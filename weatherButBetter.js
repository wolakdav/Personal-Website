var getWeather = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        weatherRequest(lat,lon);
      })
    }
       else {
            window.alert("Could not get location");
      }
  
};


function weatherRequest(lat, lon) {

      const request = new XMLHttpRequest();
    
      const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+Math.floor(lat)+'&lon='+Math.floor(lon)+'&APPID=bcd3af470b4f17ad93de4072f6e47d9f'//This works! Fuck security
      //`https://api.darksky.net/forecast/695544473a2dd8009951c9bddec71282/${lat},${long}` + `?format=jsonp&callback=displayWeather`; Grrrrr CORS
    
      request.open("GET",url);
      request.send();
      var temp = document.getElementById("temp");
      request.onreadystatechange= function() {
        console.log(this.status)
        if(this.readyState ==4 && this.status == 200)
        {
          console.log("Ran request")
          var myArr = JSON.parse(this.responseText);
          console.log(myArr);
          myFunction(myArr)
        }
      }
    /*
    fetch(url)
    .then((resp) => resp.json())//CORS is dumb
    .then(function(data) {
        document.getElementById("temp").innerHTML = currently.temperature;
      })
    .catch(function(error) {
        document.getElementById("temp").innerHTML = "CORS is dumb"
    });   
    */
}

function myFunction(arr) {
  var kelvin = arr["main"]["temp"]
  document.getElementById("temp").innerHTML = kelvinToFar(kelvin);
  
  
}

function kelvinToFar(kelvin)
{ 
 return Math.floor(((9/5) *(kelvin - 273) +32));
}


