var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});



function startup()
{

    var height = this.clientHeight;
    var width = window.innerWidth;
    console.log(height+"px"+ " " + width+"px");
    document.getElementById("button").style.padding = height+"px"+ " " + width+"px";
    console.log("Startup Running")
}

function goHome()
{

        location.href = "home.html";

 
}

function goWork()
{
    location.href = "work.html";
}


function createRipple(e)
{
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

    console.log(this);

    circle.classList.add('ripple');

  
   

}