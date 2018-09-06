newsLink = new Array(3);


function tabChanger(evt, tab) {  //This will have to be changed
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabContent");
  console.log(tabcontent.length)
  for (i = 0; i < tabcontent.length; i++) {
      
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  var style;
  if(tab === "masterNews")
  {
    style = "inline-flex";
  }else{
    style = "block";
  }
  console.log(document.getElementById(tab));
  document.getElementById(tab).style.display = style;
  evt.currentTarget.className += " active";
}


function newsGetter(evt)
{

  tabcontent = document.getElementsByClassName("tabContent");
  console.log(tabcontent.length)
  for (i = 0; i < tabcontent.length; i++) {
      
      tabcontent[i].style.display = "none";
  }

  document.getElementById("masterNews").style.display = "inline-flex";


   const url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=b8afde80106c4d3aaf1a04be769d19d4"

    const request = new XMLHttpRequest();
      request.open("GET",url);
      request.send();
      var temp = document.getElementById("temp");
      request.onreadystatechange= function() {
        console.log(this.status)
        if(this.readyState ==4 && this.status == 200)
        {
        // console.log(this.responseText)//its aaalllliiivvvveeeee
          newsShow(JSON.parse(this.responseText));
          //console.log(myArr);
         // processWeather(myArr)
        }
      }
}



function newsShow(news)
{
    console.log(news["articles"][3]["urlToImage"]);

    photoLink = new Array(3);
    titles = new Array(3);
    descriptions = new Array(3);
    



    for(var i =1;i<4;i++)
    {
       photoLink[i-1] = news["articles"][i]["urlToImage"];
       titles[i-1] = news["articles"][i]["title"]+"\n";
       descriptions[i-1] =  news["articles"][i]["description"]+"...";
       newsLink[i-1] = news["articles"][i]["url"]
    }

       for(var i = 0;i<3;i++)
       {
         console.log(descriptions[i])
          if(photoLink[i] === null) 
          {
            photoLink[i] = "news.png";
          }
          if(titles[i] === null)
          {
            titles[i] = "No Title Included"
          }
          if(descriptions[i] === "null...")
          {
            descriptions[i] = "No description included"
          }
       }
  
    
      document.getElementById("title").firstChild.nodeValue = titles[2];
      document.getElementById("description").innerHTML = descriptions[2];
      document.getElementById("photo").src = photoLink[2];

      document.getElementById("title1").firstChild.nodeValue = titles[1];
      document.getElementById("description1").innerHTML = descriptions[1];
      document.getElementById("photo1").src = photoLink[1];

      document.getElementById("title2").firstChild.nodeValue = titles[0];
      document.getElementById("description2").innerHTML = descriptions[0];
      document.getElementById("photo2").src = photoLink[0];
     
}

function newsCenter()
{
  window.location.href = newsLink[2];
}

function newsLeft()
{
  window.location.href = newsLink[1];
}

function newsRight()
{
  window.location.href = newsLink[0];
}

function youtube()
{
  window.location.href = "https://www.youtube.com";
}
function rwby()
{
  window.location.href = "http://rwby-rpg.rwbyfanon.com/";
}

function facebook()
{
  window.location.href = "https://www.facebook.com/";
}