
function button(name){
    console.log("Running Hide");
    var tabs = document.getElementsByClassName("tab");

    console.log(tabs);
    for (i = 1; i < tabs.length; i++) {
      
        tabs[i].style.display = "none";
    }

    if(name != null)
    {
        var div = name +"Tab"
        var style = "active";
        console.log(document.getElementById(div));
        document.getElementById(div).style.display = style;
    }


}


