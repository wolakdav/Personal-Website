

function newsGetter()
{
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
    }
/*
 
    photoLink[1] = news["articles"][2]["urlToImage"];
    photoLink[2] = news["articles"][3]["urlToImage"];
  
    ti
       console.log(photoLink[0]===null)
*/
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