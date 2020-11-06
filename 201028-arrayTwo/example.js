// ************ JOIN ************** // Retorna un string el cual es el resultado de la concatenación de los elementos del arreglo unidos mediante el parámetro ingresado
/* let joinEx1 = [1, 2, 3, 4, 5];
let joinEx2 = joinEx1.join('');
 console.log('joinEx2', joinEx2);//example.js:5 joinEx2 12345
 let joinEx3 = joinEx1.join('*');
 console.log('joinEx3', joinEx3);//example.js:6 joinEx3 1*2*3*4*5

 */


// ************ MAP ************** // Retorna un nuevo arreglo con el resultado de la modificación de los elementos
// let mapEx1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mapEx2 = mapEx1.map((data) => data * 2);
// console.log('mapEx2', mapEx2);

// let mapEx3 = [
//   {
//     "name": 'saludo',
//     "value": 'Hola'
//   },
//   {
//     "name": 'despedida',
//     "value": 'Adiós'
//   }
// ];
// let mapEx4 = mapEx3.map((data) => data.value);
// let mapEx5 = mapEx3.map((data) => ({ "value": data.value }));
// console.log('mapEx4', mapEx4);
// console.log('mapEx5', mapEx5);
// -------------------------------------------------



// ************ REDUCE ************** // Devuelve un número que es el resultado de la operación que se ejecute usando el acumulador y el elemento actual del arreglo
// let reduceEx1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let accumulator = 0;
// for (let x = 0; x < reduceEx1.length; x++) {
//   accumulator += reduceEx1[x];
// }
// console.log('accumulator', accumulator);

// let reduceEx2 = reduceEx1.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log('reduceEx2', reduceEx2);
// -------------------------------------------------



// ************ REVERSE ************** // Revierte el arreglo
// let reverseEx1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reverseEx1.reverse();
// console.log('reverseEx1', reverseEx1);


// let reverseEx2 = ['Buenos días', 'Buenas tardes', 'Buenas noches'];
// reverseEx2.reverse();
// console.log('reverseEx2', reverseEx2);
// -------------------------------------------------



// ************ SLICE ************** // Edita el arreglo recortándolo por los índices que le ingreses por parámetro, toma un trozo de la torta
// let sliceEx = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log('sliceEx', sliceEx.slice(2));
// console.log('sliceEx', sliceEx.slice(2, 4));
// console.log('sliceEx', sliceEx.slice(1, 5));
// -------------------------------------------------




// ************ SPLICE ************** // Edita el arreglo desde la posición ingresada como primer parámetro, eliminando la cantidad de elementos ingresados en el segundo parámetro y el valor a agregar es el indicado en el tercer parámetro
// let spliceEx1 = ['Jan', 'March', 'April', 'May'];
// spliceEx1.splice(1, 0, 'Feb');
// console.log('spliceEx1', spliceEx1);

// let spliceEx2 = [0, 1, -8, 3, 4, 5, 6, 7];
// spliceEx2.splice(2, 1, 2);
// console.log('spliceEx2', spliceEx2);
// -------------------------------------------------



// ************ SORT ************** // Modifica el arreglo ordenándolo, si no le ingresas parámetros lo ordena considerando los elementos como strings
// let sortEx1 = [0, 22, -1, 30, 45, -10, 10, 100, 70];
// sortEx1.sort((a, b) => a - b); // Ascendente
// console.log('sortEx1', sortEx1);

// let sortEx2 = [0, 22, -1, 30, 45, -10, 10, 100, 70];
// sortEx2.sort((a, b) => b - a); // Descendente
// console.log('sortEx2', sortEx2);

// let sortEx3 = [0, 22, -1, 30, 45, -10, 10, 100, 70];
// sortEx3.sort();
// console.log('sortEx3', sortEx3);
// -------------------------------------------------
