console.log('Inicio');

setTimeout(() => {
    console.log(1);
}, 3000);

setTimeout(function () {
    console.log(2);
}, 0);

console.log('Fin');


// function hagoAlgo(callback) {

//     console.log('111');
    
//     callback();
// }

// hagoAlgo( function() { console.log('Hola Anexsoft !!'); } );


/* ****************** */
// ¿Qué es un Callback?

// De forma sencilla: Un Callback (llamada de vuelta) es una función que se ejecutará después de que otra función haya terminado de ejecutarse, de aquí el nombre de Callback.

// ¿Por qué necesitamos Callbacks?
// Por una razón muy importante, JavaScript es un lenguaje orientado a eventos. Esto significa que en lugar de esperar a una respuesta para avanzar, JavaScript seguirá ejecutándose mientras escucha otros eventos. Echemos un vistazo a un ejemplo básico:

// function first() {
//     console.log(1);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();

// Como podrías esperar, la función first se ejecuta la primera y la función second se ejecuta después, escribiendo el siguiente mensaje en la consola.
// 1
// 2

// Por ahora todo claro. Pero, ¿qué pasaría si la función first contuviera algún tipo de código que no se puede ejecutar inmediatamente? Por ejemplo, una petición a una API, donde tenemos que enviar una petición y esperar una respuesta. Para simular esta acción, usaremos setTimeout que es una función JavaScript que llama a una función después de una determinada cantidad de tiempo. Vamos a retrasar nuestra función 500 milisegundos para simular una petición a una API. Nuestro nuevo código quedaría así:

// function first() {
//     // Simular retardo
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();

// A pesar de que hemos invocado primero a la función first, se ha escrito el resultado de esa función después de la función second.

// No es que JavaScript no haya ejecutado las funciones en el orden que queríamos, lo que sucede es que JavaScript no ha esperado a la respuesta de first para avanzar y ejecutar second.

// ¿Por qué te mostramos esto? Porque no podemos sencillamente llamar a una función detrás de otra esperar que se ejecuten en el orden correcto. Los Callbacks son un modo de asegurarse de que cierto código no se ejecuta hasta que otro código haya terminado de ejecutarse.
/* ****************** */

/* ****************** */
// Obtener una respuesta en un tiempo indeterminado pero sin afectar el proceso principal

// function first() {
//     // Simular retardo
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
