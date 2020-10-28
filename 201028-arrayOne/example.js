// ************ PUSH ************** // Agrega un elemento al final del array y retorna el nuevo length del arreglo
// let pushEx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('pushEx before:', pushEx);
// const newLength = pushEx.push(10);
// // const newLength = pushEx.push(10, 12, 13); // Pueden agregarse varios elementos
// console.log('newLength:', newLength);
// console.log('pushEx after:', pushEx);
// -------------------------------------------------



// ************ UNSHIFT ************** // Agrega un elemento al inicio del array y retorna el nuevo length del arreglo
// let unshiftEx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('unshiftEx before:', unshiftEx);
// const newLength = unshiftEx.unshift(0);
// // const newLength = unshiftEx.unshift(-2, -1, 0); // Pueden agregarse varios elementos
// console.log('newLength:', newLength);
// console.log('unshiftEx after:', unshiftEx);
// -------------------------------------------------



// ************ SHIFT ************** // Elimina el primer elemento de un arreglo y lo retorna
// const shiftEx = [1, 2, 3];
// console.log('shiftEx before:', shiftEx);
// const firstElement = shiftEx.shift();
// console.log('firstElement:', firstElement);
// console.log('shiftEx after:', shiftEx);
// -------------------------------------------------



// ************ POP ************** // Elimina el último elemento de un arreglo y lo retorna
// let popEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log('popEx before:', popEx);
// const lastElement = popEx.pop();
// console.log('lastElement:', lastElement);
// console.log('popEx after:', popEx);
// -------------------------------------------------



// ************ FILTER ************** // Retorna los valores filtrados según la condición
// let filterEx = [
//     { "name": 'Daniela', "gender": 'f' },
//     { "name": 'Andrea', "gender": 'f' },
//     { "name": 'Chinchilla', "gender": 'f' },
//     { "name": 'Natalia', "gender": 'f' },
//     { "name": 'Scarlett', "gender": 'f' },
//     { "name": 'Igor', "gender": 'm' },
//     { "name": 'Miguel', "gender": 'm' }
// ];


// let filtered1 = [];
// for (let x = 0; x < filterEx.length; x++) {
//     if (filterEx[x].gender === 'f') {
//         filtered1.push(filterEx[x]);
//     }
// }
// console.log('filtered1:', filtered1);


// let filtered2 = filterEx.filter((data) => data.gender === 'f');
// console.log('filtered2:', filtered2);
// -------------------------------------------------


// ************ FOREACH ************** // Recorre el arreglo sin comportamiento definido, aquí tu implementas la acción a ejecutar en cada elemento
// let foreachEx = [
//     { "name": 'Daniela', "gender": 'f' },
//     { "name": 'Andrea', "gender": 'f' },
//     { "name": 'Chinchilla', "gender": 'f' },
//     { "name": 'Natalia', "gender": 'f' },
//     { "name": 'Scarlett', "gender": 'f' },
//     { "name": 'Igor', "gender": 'm' },
//     { "name": 'Miguel', "gender": 'm' }
// ];


// for (let x = 0; x < foreachEx.length; x++) {
//     if (foreachEx[x].gender === 'm') {
//         console.log('Male:', foreachEx[x].name);
//         console.log('index', x);
//     }
// }


// foreachEx.forEach((data, index) => {
//     if (data.gender === 'm') {
//         console.log('Male:', data.name);
//         console.log('index', index);
//     }
// });
// -------------------------------------------------



// ************ FIND ************** // Devuelve el primer elemento según la validación, de lo contrario undefined
// const findEx = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let found1;
// for (let x = 0; x < findEx.length; x++) {
//     if (findEx[x] > 40) {
//         found1 = findEx[x];
//         break;
//     }
// }
// console.log('found1:', found1);


// const found2 = findEx.find((data) => data > 40);
// console.log('found2:', found2);
// -------------------------------------------------



// ************ FINDINDEX ************** // Devuelve el index del primer elemento según la validación, de lo contrario -1
// const findindexEx = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let foundindex1;
// for (let x = 0; x < findindexEx.length; x++) {
//     if (findindexEx[x] > 40) {
//         foundindex1 = x;
//         break;
//     }
// }
// console.log('foundindex1:', foundindex1);


// const foundindex2 = findindexEx.findIndex((data) => data > 40);
// console.log('foundindex2:', foundindex2);
// -------------------------------------------------



// ************ INCLUDES ************** // Devuelve true según la validación, de lo contrario false
// const includesEx = ['Natalia', 'Andrea', 'Daniela', 'Scarlett', 'Chinchilla', 'Igor', 'Miguel'];
// const included = includesEx.includes('Miguel');
// console.log('included:', included);
// -------------------------------------------------



// ************ INDEXOF ************** // Devuelve el índice del elemento pasado por parametro si lo encuentra, de lo contrario -1
// const indexofEx = ['Natalia', 'Andrea', 'Daniela', 'Scarlett', 'Chinchilla', 'Igor', 'Miguel'];
// const foundindexof = indexofEx.indexOf('Miguel');
// console.log('foundindexof:', foundindexof);
// -------------------------------------------------
