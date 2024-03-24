function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if(menuBth.className === "nav-menu")
    {
        menuBth.className += "responsive";
    }
    else{
        menuBth.className = "nav-menu";
    }
}

/*------Dark mode-----*/

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=> {
    body.classList.toggle("dark");
});


var typingEffect = new Typed(".typedText",{
    strings: ["Java Developer","Web Developer","Coder"],
    loop: true,
    typedSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})