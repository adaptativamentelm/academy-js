let red = document.getElementsByClassName('red');
let green = document.getElementsByClassName('green');
let blue = document.getElementsByClassName('blue');

function addEvent() {
    for (let i = 0; i < red.length; i++) {
        red[i].addEventListener("click", redFunction);    
    }
    for (let e = 0; e < green.length; e++) {
        green[e].addEventListener("click", greenFunction);    
    }
    for (let o = 0; o < blue.length; o++) {
        blue[o].addEventListener("click", blueFunction);    
    }
     
 }


function redFunction() {
    for (let x = 0; x < red.length; x++) {
        red[x].classList.add("red2");   
    }   
}
function greenFunction() {
    for (let x = 0; x <green.length; x++) {
        green[x].classList.add("green2");   
    }   
}
function blueFunction() {
    for (let x = 0; x < blue.length; x++) {
        blue[x].classList.add("blue2");   
    }   
}

addEvent();