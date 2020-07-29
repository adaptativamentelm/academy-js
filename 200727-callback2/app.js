// let ejemplo1 = document.getElementById('button');

// ejemplo1.addEventListener('click', function() {
//     console.log('no me gusta este color qlo');
// });

// ejemplo1.addEventListener('click', () => {
//     console.log('no me gusta este color qlo');
// });

// escribir callback en formato viejo
// parametros del setTimeout son una funcion y milesimas
// setTimeout( function() {
//     console.log('got7 es el mejor');
// }, 5000);

// // que notacion es?
// element.addEventListener('click', () => {
//     console.log();
// });

// // que notacion es?
// setTimeout(function () {
//     console.log();
// }, 3000);

// // que notacion es?
// setTimeout(() => {
//     console.log();
// }, 3000);

// // escribir callback en formato viejo
// element.addEventListener('click', function () {
//     console.log('ya');
// });

// // escribir callback en formato nuevo
// setTimeout(() =>{
//      console.log('asi?');
// }, 3000);

// // cambiar de formato
// element.addEventListener('click', () => {
//     console.log();
// });

// //declaracion: function, let, var, const
// function nuevo() {
//     console.log('wena');
// }
// let nuevo = () => {
//     console.log('wena');
// };
// //invocacion: ()
// nuevo();

// // que notacion es?
// let interval = setInterval(() => { console.log('holis nuevo'); }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);

// setTimeout(() => {
//     console.log('Andrea');
// }, 3000);

// // esto esta correcto?
// let myFunction = () => {
//     console.log('Andrea');
// };
// setTimeout(myFunction, 3000);

//_____________________________________________

// Ejemplo1
// function greeting(nombre) {
//     alert(`Hello ${nombre}`);
//     console.log(`fin codigo1`);
// }
// function greeting2(nonvre) {
//     alert(`Hello ${nonvre}`);
//     console.log(`fin codigo2`);
// }
// // // ---------------> output es la función greeting! <-------------------                             
// function processUserInput(output) {
//     console.log('inicio')
//     let promptNombre = prompt('Please enter your name.');
//     output(promptNombre); // el parametro NOMBRE es el promptNombre, ahi lo recibe cuando lo creas
//     // greeting(promptNombre);
// }
// processUserInput(greeting);
// processUserInput(greeting2);

///////////////////////////////

// Ejemplo2
function greeting(nombre) {
    alert(`Hello ${nombre}`);
}
function processUserInput(output) {
    console.log('inicio')
    let promptNombre = prompt('Please enter your name.');
    output(promptNombre);
}
processUserInput(greeting);

/***************************************/

function processUserInput(output) {
    let nombre = prompt('Please enter your name.');
    output(nombre);
}
processUserInput(function(nombre) { alert(`Hello ${nombre}`); });