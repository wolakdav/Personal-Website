
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
        console.log(document.getElementById(div).style);
        document.getElementById(div).style.display = " block";
    }


}


function copy(id)
{

    switch (id){
        case "java":
            var toCopy = document.getElementById("javaLink");
            toCopy[0].select();
            document.execCommand("copy");
            break;
        case "https://inb.banner.pdx.edu/forms/frmservlet?config=oprds":
            document.execCommand("https://inb.banner.pdx.edu/forms/frmservlet?config=oprds");
            break;
        default:
    }

}

