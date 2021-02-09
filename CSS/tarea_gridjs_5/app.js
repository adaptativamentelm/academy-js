const buttonsRow1 = document.getElementsByClassName("button1");
const buttonsRow2 = document.getElementsByClassName("button2");
const buttonsRow3 = document.getElementsByClassName("button3");

let colorRow1 = () => {
    for (let i = 0; i < 3; i++) {
        buttonsRow1[i].style.backgroundColor = "white";
        buttonsRow1[i].style.border = "5px solid red";
        buttonsRow1[i].style.color = "red";
    }
}

let colorRow2 = () => {
    for (let i = 0; i < 3; i++) {
        buttonsRow2[i].style.backgroundColor = "white";
        buttonsRow2[i].style.border = "5px solid green";
        buttonsRow2[i].style.color = "green";
    }
}

let colorRow3 = () => {
    for (let i = 0; i < 3; i++) {
        buttonsRow3[i].style.backgroundColor = "white";
        buttonsRow3[i].style.border = "5px solid blue";
        buttonsRow3[i].style.color = "blue";
    }
}

for (let i = 0; i < 3; i++) {
    buttonsRow1[i].addEventListener("click", colorRow1)
    buttonsRow2[i].addEventListener("click", colorRow2)
    buttonsRow3[i].addEventListener("click", colorRow3)

}