const navigationHome = () =>{
    document.getElementById("contentFrame").setAttribute("src","home.html")
    document.getElementById("navigation__home").style = "color:black; background-color: white;"
    document.getElementById("navigation__jukebox").style = "color:white; background-color: #298eb5;"
    document.getElementById("navigation__game").style = "color:white; background-color: #298eb5;"
}

const navigationJukebox = () =>{
    document.getElementById("contentFrame").setAttribute("src","jukebox.html")
    document.getElementById("navigation__home").style = "color:white; background-color: #298eb5;"
    document.getElementById("navigation__jukebox").style = "color:black; background-color: white;"
    document.getElementById("navigation__game").style = "color:white; background-color: #298eb5;"
}

const navigationGame = () =>{
    document.getElementById("contentFrame").setAttribute("src","game.html")
    document.getElementById("navigation__home").style = "color:white; background-color: #298eb5;"
    document.getElementById("navigation__jukebox").style = "color:white; background-color: #298eb5;"
    document.getElementById("navigation__game").style = "color:black; background-color: white;"
}