// const buttonsRow1 = document.getElementsByClassName("button1");
// const buttonsRow2 = document.getElementsByClassName("button2");
// const buttonsRow3 = document.getElementsByClassName("button3");
const container = document.getElementById("container2")

let buttonRows = [];

let rows = 3;
let columns = 3;

container.style.display = "grid";
container.style.gridTemplateColumns = `${100/columns}% `.repeat(columns); //grid que modifica el nujmero de columnas dinamicamente en igual proporcion

for (let j = 0; j < rows; j++) {
    let buttonHtmlData = [];
    for (let i = 0; i < columns; i++) {
        let newButton = document.createElement('button');;
        newButton.className = `fila${j+1} button${j+1}`;
        newButton.innerHTML = `Boton ${j*3+i+1}`;
        container.appendChild(newButton);
        buttonHtmlData.push(newButton);
    }
    buttonRows.push(buttonHtmlData);

}

// for (let i = 0; i < rows * columns; i++) {
//     let newButton = document.createElement('button');
//     buttonNumber = parseInt(((i) / columns) + 1);
//     newButton.className = `fila${buttonNumber} filaButtons button${buttonNumber}`;
//     newButton.innerHTML = `Boton ${i+1}`;
//     console.log(newButton);
//     container.appendChild(newButton);


// }

let colorRow1 = () => {
    for (let j = 0; j < columns; j++) {
        buttonRows[0][j].style.backgroundColor = "white";
        buttonRows[0][j].style.border = "5px solid red";
        buttonRows[0][j].style.color = "red";
    }
}

let colorRow2 = () => {
    for (let j = 0; j < columns; j++) {
        buttonRows[1][j].style.backgroundColor = "white";
        buttonRows[1][j].style.border = "5px solid green";
        buttonRows[1][j].style.color = "green";
    }
}

let colorRow3 = () => {
    for (let j = 0; j < columns; j++) {
        buttonRows[2][j].style.backgroundColor = "white";
        buttonRows[2][j].style.border = "5px solid blue";
        buttonRows[2][j].style.color = "blue";
    }
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        switch (i) {
            case 0:
                console.log(i);
                buttonRows[i][j].addEventListener("click", colorRow1);
                break
            case 1:
                console.log(i);
                buttonRows[i][j].addEventListener("click", colorRow2);
                break
            case 2:
                console.log(i);
                buttonRows[i][j].addEventListener("click", colorRow3);
        }
    }
}