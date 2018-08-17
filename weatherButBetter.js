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
    
      const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+Math.floor(lat)+'&lon='+Math.floor(lon)+'&APPID=bcd3af470b4f17ad93de4072f6e47d9f'//This works! Fuck security
    
    
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
          processWeather(myArr)
        }
      }

}

function processWeather(arr) {

  var kelvin = arr["main"]["temp"]
  var condition = arr["weather"][0]["description"];
  var icon = arr['weather'][0]['id'];
  var country = arr['sys']["country"];

  if(country == 'US')
  {
    document.getElementById("temp").innerHTML = kelvinToFar(kelvin)+"°";
  }else{
    document.getElementById("temp").innerHTML = kelvinToCel(kelvin)+"°";
  }
  
  document.getElementById("description").innerHTML = "Current condition: "+condition;
  document.getElementById("weatherIcon").className = "owf owf-"+icon+ " owf-3x";
  console.log(condition);
  if(condition == "clear sky")
  {
    document.getElementById("weatherIcon").style.color="yellow";
  }

 

}

function kelvinToFar(kelvin)
{ 
 return Math.floor(((9/5) *(kelvin - 273) +32));
}
function kelvinToCel(kelvin)
{
  return Math.floor(kelvin-273.15);
}
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
