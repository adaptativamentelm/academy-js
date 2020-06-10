
function changeTitle() {
    var nuevoTitulo = prompt("Escribe el nuevo título");
    if (nuevoTitulo !== ""){
        document.getElementById("title").innerHTML = nuevoTitulo;
    }
    else{
        alert("Debes escribir algo");
    }
}

function isChecked() {
    let check = document.getElementById("check");
   
    if (check.checked === true) {
        console.log("Está seleccionado"); 
    }else{
        console.log("No está seleccionado");
    } 
}

function inputsActivos() {
    let checkedInputs = []; 
    let inputElements = document.getElementsByClassName('inputc');
    for(let i=0; i< inputElements.length; i++){
        if(inputElements[i].checked){
            checkedInputs.push(inputElements[i].id);
        }    
    }
    console.log(checkedInputs);
    return checkedInputs;
}

function tooMuch() {
    let checkeds = []; 
    let inputElement2s = document.getElementsByClassName('inputc');
    for(let x=0; x< inputElement2s.length; x++){
        if(inputElement2s[x].checked){
            checkeds.push(inputElement2s[x]);
        }       
    }
    if (checkeds.length > 3) {
        alert("Has seleccionado más de tres que vergas, te gusta todo?");
    } 
}

function evencheckeds() {
    let evenArray = [];
    let inputElements3 = document.getElementsByClassName('inputc');
    for(let y=0; y < inputElements3.length; y++){
        if((y + 1) % 2 == 0){
            evenArray.push(inputElements3[y]);
            inputElements3[y].checked = true;
        }
    }
}

function oddcheckeds() {
    let oddArray = [];
    let inputElements4 = document.getElementsByClassName('inputc');
    for(let z=0; z < inputElements4.length; z++){
        if((z + 1) % 2 !== 0){
            oddArray.push(inputElements4[z]);
            inputElements4[z].checked = true;
        }
    }  
}

let ids = 0;
function createWeas() {
    ids++;
    let contenedor = document.getElementById('contenedor');
    let inputHermoso = document.createElement('input');
    inputHermoso.type = "checkbox";
    inputHermoso.id = `input_${ids}`;
    let label = document.createElement('label');
    label.setAttribute("for", `input_${ids}`);
    label.innerHTML = "chinchilla";
    let brs = document.createElement('br')
    contenedor.appendChild(inputHermoso);
    contenedor.appendChild(label);
    contenedor.appendChild(brs);
}

