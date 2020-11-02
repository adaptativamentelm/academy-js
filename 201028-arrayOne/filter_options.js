data = [
        { "name": 'Daniela', "gender": 'f' },
        { "name": 'Andrea', "gender": 'f' },
        { "name": 'Chinchilla', "gender": 'f' },
        { "name": 'Natalia', "gender": 'f' },
        { "name": 'Scarlett', "gender": 'f' },
        { "name": 'Igor', "gender": 'm' },
        { "name": 'Miguel', "gender": 'm' }
    ];

// ************ FILTER ************** // Retorna los valores filtrados según la condición
// let filtered1 = [];
// for (let x = 0; x < filterEx.length; x++) {
//     if (filterEx[x].gender === 'f') {
//         filtered1.push(filterEx[x]);
//     }
// }
// console.log('filtered1:', filtered1);
let filter_data = data.filter((data) => data.gender === 'f');
console.log('filtered2:', filter_data);
// let filtered2 = data.filter((data) => { 
//     if(data.gender === 'f') {
//         console.log('si');
//     }
// });
// console.log('filtered2:', filtered2);
// ************ FOREACH ************** // Recorre el arreglo sin comportamiento definido, aquí tu implementas la acción a ejecutar en cada elemento

// for (let x = 0; x < foreachEx.length; x++) {
//     if (foreachEx[x].gender === 'm') {
//         console.log('Male:', foreachEx[x].name);
//         console.log('index', x);
//     }
// }
data.forEach((data, index) => {
    if (data.gender === 'm') {
        console.log('forEach', data.name);
        // console.log('index', index);
    }
});
// ************ INCLUDES ************** // Devuelve true según la validación, de lo contrario false
// const includesEx = ['Natalia', 'Andrea', 'Daniela', 'Scarlett', 'Chinchilla', 'Igor', 'Miguel'];
console.log(data[0].name);
const included = data.includes('Miguel');
console.log('included:', included);