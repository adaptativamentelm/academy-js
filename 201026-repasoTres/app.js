let lis = document.getElementsByTagName('li'); // Obtengo todos los li
let li2 = document.getElementById('second'); // Obtengo el segundo

lis[0].addEventListener('click', () => console.log('primer li')); // Igual
lis[0].addEventListener('click', () => { console.log('primer li') }); // Igual
lis[0].addEventListener('click', function () { console.log('primer li'); }); // Igual

// lis[1] = li2; ES EL MISMO ELEMENTO

() => console.log('Hi'); // Función anónima
const fun1 = () => console.log('Hi'); // Función con nombre o normal

addEventListener('click', function () { // El addEventListener es un callback
    console.log('Lo que sea');
});

let obj = {
    "desc": 'auto',
    "velocidad": 0,
    "acelerar": function () {
        this.velocidad += 1; // This apunta al objeto "obj"
    },
    "detener": () => {
        this.velocidad; // Función de flecha y this no funcionan juntos
    }
}

location.href // Donde estoy
location.href = 'profile.html'; // Redirecciona
location.assign('profile.html'); // Redirecciona
location.reload();
location.replace('profile.html'); // Redirecciona borrando el rastro de la página actual

let persona = {
    "nombre": 'Sofi',
    "edad": 1.5,
    "genero": 'Femenino'
};

localStorage.setItem('persona', JSON.stringify(persona)); // Guardar objeto
let personaData = JSON.parse(localStorage.getItem('persona')); // Obtener objeto
localStorage.removeItem('persona'); // Eliminar un dato
localStorage.clear(); // Eliminar todo

const getData = async () => {
    let responseGet = await fetch('url');
    let dataGet = await responseGet.json();

    const requestPayload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({ "id": 1 })
    };
    let responsePost = await fetch('url', requestPayload);
    let dataPost = await response.json();
};

let usuarios = ['Scar', 'Dani', 'Natalia'];