let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let pares = [];
let impares = [];
let data = [];
let divPares = document.getElementById('nombrePar')
let divImpar = document.getElementById('nombreImpar')

const getData = async () => {
    let response = await fetch(get);
    data = await response.json();
    recorrido();
}
getData();

const recorrido = () => {
    for (i = 0; i < data.length; i++) {
        // console.log(data[i]);
        if (data[i].id % 2 === 0) {
            // console.log('pares:', data[i])
            draw(data[i].name, 'par');
        } else {
            // console.log('impares:', data[i])
            draw(data[i].name, 'impar');

        }
    }
}

const draw = (name, parimpar) => {
    let nombre = document.createElement('p');
    nombre.innerHTML = name;
    if (parimpar === 'par') {
        divPares.appendChild(nombre);
    }else{
        divImpar.appendChild(nombre);
    }
    //     divPares.appendChild(nombre);    
}
// draw('kdsfklsdj');
