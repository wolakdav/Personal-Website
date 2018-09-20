
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
       // console.log(document.getElementById(div).style);
        document.getElementById(div).style.display = " block";
    }

    if(document.getElementById("landingTab").style.display != "block" )
    {
        document.getElementById("landingTab").classList.add("tab");
    }


}


function copy(id)
{

    switch (id){
        case "java":
            var toCopy = document.getElementById("javaLink").select();
            console.log(toCopy);
           // toCopy.execCommand('copy');
            document.execCommand("copy");
            break;

        case "browser":
            var toCopy = document.getElementById("browserLink");
            console.log(toCopy);
            //toCopy.execCommand('copy');
            document.execCommand("copy");
            break;

        default:
    }

}

