
function cambiarTitulo() {
    let h2 = document.getElementsByTagName('h2');
    let cadena = prompt('Escribe aquí el nuevo título:');
    h2[0].innerHTML = cadena;
}

function isSeleccionado() {
    let inputCheck = document.getElementById('check');
    if (inputCheck.checked) {
        console.log('Este input SÍ esta activo');
    } else {
        console.log('Este input NO esta activo');
    }
}

let inputs = document.getElementsByClassName('inputc');

function imprimeValorActivos() {
    let activos = [];
    for (let x = 0; x < inputs.length; x++) {
        if (inputs[x].checked) {
            activos.push(inputs[x].value);
        }
    }
    console.log('Los inputs activos son:', activos);
}

function activosMayor3() {
    let cantidadActivos = 0;
    for (let x = 0; x < inputs.length; x++) {
        if (inputs[x].checked) {
            cantidadActivos++;
        }
        if (cantidadActivos > 3) {
            alert(`La cantidad de activos es mayor a 3: ${cantidadActivos}`);
            break;
        }
    }
}

function activarPares() {
    for (let x = 0; x < inputs.length; x++) {
        if ((x + 1) % 2 === 0) {
            inputs[x].checked = true;
        } else {
            inputs[x].checked = false;
        }
    }
}

function activarImpares() {
    for (let x = 0; x < inputs.length; x++) {
        if ((x + 1) % 2 !== 0) {
            inputs[x].checked = true;
        } else {
            inputs[x].checked = false;
        }
    }
}

function crearElementos() {
    let div = document.getElementById('contenedor');
    let input = document.createElement('input');
    input.type = "checkbox";
    input.id = "inputcreado";
    let label = document.createElement('label');
    label.setAttribute('for', 'inputcreado');
    label.innerHTML = "Elementos creados"
    div.appendChild(input);
    div.appendChild(label);
}
