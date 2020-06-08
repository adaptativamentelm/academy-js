let titulo2 = document.getElementById('titulo2');

function cambiatitulo() {
    // console.log('tienes el boton');
    // nuevo_titulo= prompt('ingresa nuevo titulo');
    // titulo2.innerHTML = nuevo_titulo;
    titulo2.innerHTML = prompt('ingresa nuevo titulo');
}

//-----------------------<[*]>-------------------------//

let checkeado = document.getElementById('check');

function check_checkeado(){
    // console.log('esta andando esta funcion');
    if (checkeado.checked)
    console.log('si, esta seleccionado');
    else
    console.log('nop, no esta seleccionado!');
}

//-----------------------<[*]>-------------------------//

let activos = document.getElementsByClassName('inputc');

let pares1 = document.getElementById('two'); // para prueba, no escalable
let pares2 = document.getElementById('four'); // para prueba, no escalable
let impares1 = document.getElementById('one');
let impares2 = document.getElementById('three');
let impares3 = document.getElementById('five');

function los_activos() {
    // console.log('viendo los_activos');
    // console.log(activos)
    for (let i = 0; i < activos.length; i++) {
        const seleccionado = activos[i];
        if (seleccionado.checked)
        console.log(seleccionado.value);
    }
}
function alerta_mas_3() {
    // console.log('para mostrar los mas de 3');
    let seleccionados2 = [];
    for (let i = 0; i < activos.length; i++) {
        const seleccionado = activos[i];
        if (seleccionado.checked)
        seleccionados2.push(seleccionado);
    }
    if (seleccionados2.length > 3)
    alert('tienes mas de 3 seleccionados!')
    else
    console.log('tienes menos de 3 seleccionados')
}
function activa_solo_pares() {
    
    if (pares1.id == "two" | pares1.id == "four")
    // console.log('tomando los pares');
    pares1.checked = true;
    pares2.checked = true;
}
function activa_solo_impares() { 
    console.log('para activar los impares');
    if (impares1.id == "one" | impares2.id == "three" | impares3.id == "five")
    impares1.checked = true;
    impares2.checked = true;
    impares3.checked = true;   
}
//-----------------------<[*]>-------------------------//

let contador = 0
function creaDiv(){
    let check = document.createElement('input');
    check.id = 'id_check'
    check.type = "checkbox";
    check.checked = true;
    let label = document.createElement('label');
    label.setAttribute("for", 'id_check');
    label.innerHTML = prompt('Ingresa algo:');
    let breaker = document.createElement('br');
    let divcontenedor = document.getElementById('contenedor');
    divcontenedor.appendChild(check);
    divcontenedor.appendChild(label);
    divcontenedor.appendChild(breaker);
}
