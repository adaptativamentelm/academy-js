// 1 Imprimir un arreglo con objetos que solamente tengan nickname y energy como propiedades
// let data = [{
//         "name": 'Luis Miranda',
//         "nickname": 'root',
//         "energy": 3
//     },
//     {
//         "name": 'Andrea Castro',
//         "nickname": 'zwiva',
//         "energy": 5
//     },
//     {
//         "name": 'Daniela Olivares',
//         "nickname": 'dani',
//         "energy": 5
//     },
//     {
//         "name": 'Natalia Saavedra',
//         "nickname": 'root',
//         "energy": 5
//     },
//     {
//         "name": 'Andrea Miranda',
//         "nickname": 'Chinchilla',
//         "energy": 5
//     },
//     {
//         "name": 'Scarlett Platón',
//         "nickname": 'scar',
//         "energy": 5
//     }
// ];
// console.log('data', data);
// let dataDos = data.map((el) => ({ "nickname": el.nickname, "energy": el.energy }));
// console.log('dataDos', dataDos);



// 2 Crear una función que solicite un arreglo como parámetro y lo retorne con "energy" incrementado en 2
// let data = [{
//         "name": 'Luis Miranda',
//         "nickname": 'root',
//         "energy": 3
//     },
//     {
//         "name": 'Andrea Castro',
//         "nickname": 'zwiva',
//         "energy": 5
//     },
//     {
//         "name": 'Daniela Olivares',
//         "nickname": 'dani',
//         "energy": 5
//     },
//     {
//         "name": 'Natalia Saavedra',
//         "nickname": 'root',
//         "energy": 5
//     },
//     {
//         "name": 'Andrea Miranda',
//         "nickname": 'chinchilla',
//         "energy": 5
//     },
//     {
//         "name": 'Scarlett Platón',
//         "nickname": 'scar',
//         "energy": 5
//     }
// ];
// let funcion_2 = (arr) => {
//     let dataDos = arr.map((el) => ({ "name": el.name, "nickname": el.nickname, "energy": (el.energy + 2) }));
//     return dataDos;
// };
// console.log(funcion_2(data));




// 3 Solicitar un texto (prompt) e imprimir las coincidencias encontradas entre el texto y los textos en el arreglo
// let data = ['Natalia Saavedra', 'Scarlett Platón', 'Andrea Castro', 'Andrea Miranda', 'Daniela Olivares', 'Luis Miranda'];
// let text = prompt('escribe algo...');

// for (let x = 0; x < data.length; x++) {
//     if (data[x].toLowerCase().includes(text.toLowerCase())) {
//         console.log(data[x])
//     }
// }

// data.forEach(element => {
//     if (element.toLowerCase().includes(text.toLowerCase())) {
//         console.log(element);
//     }
// });

// let filtered = data.filter((el) => el.toLowerCase().includes(text.toLowerCase()));
// console.log('filtered', filtered);






// 4 Imprimir arreglo sin decimales (redondear a entero más cercano)
// let data = [1.1, 2.76, 3.98766, 4.293887, 5.492727, 6.535277, 7.229, 8.8272672, 9.82611, 10.4241];

// const datared = data.map((e) => Math.round(e));
// console.log(datared);






// 5 Quitar el primer elemento de cada arreglo dentro del arreglo e imprimirlo
// let data = [
//     [0, 1, 2],
//     [2, 3, 4],
//     [4, 5, 6],
//     [6, 7, 8],
//     [8, 9, 10]
// ];
// console.log('antes*', data);
// data.forEach((e) => e.shift());
// console.log('despues*', data);







// 6 Quitar el último elemento de cada arreglo dentro del arreglo e imprimirlo
// let data = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [5, 6, 7],
//     [7, 8, 9],
//     [9, 10, 11]
// ];
// console.log('antes*', data);
// data.forEach((e) => e.pop());
// console.log('despues*', data);


// 7 Agregar al inicio del arreglo un objeto con las siguientes propiedades: Luis Miranda, root, 3
// let data = [
//     {
//         "name": 'Andrea Castro',
//         "nickname": 'zwiva',
//         "energy": 5
//     },
//     {
//         "name": 'Daniela Olivares',
//         "nickname": 'dani',
//         "energy": 5
//     },
//     {
//         "name": 'Natalia Saavedra',
//         "nickname": 'root',
//         "energy": 5
//     },
//     {
//         "name": 'Andrea Miranda',
//         "nickname": 'chinchilla',
//         "energy": 5
//     },
//     {
//         "name": 'Scarlett Platón',
//         "nickname": 'scar',
//         "energy": 5
//     }
// ];
// console.log('data antes', data);
// data.unshift({
//     "name": 'Luis Miranda',
//     "nickname": 'root',
//     "energy": 3
// });
// console.log('data despues', data);


// 7 Agregar al final del arreglo un objeto con las siguientes propiedades: Luis Miranda, root, 1
// let data = [
//     {
//         "name": 'Andrea Castro',
//         "nickname": 'zwiva',
//         "energy": 5
//     },
//     {
//         "name": 'Daniela Olivares',
//         "nickname": 'dani',
//         "energy": 5
//     },
//     {
//         "name": 'Natalia Saavedra',
//         "nickname": 'root',
//         "energy": 5
//     },
//     {
//         "name": 'Andrea Miranda',
//         "nickname": 'chinchilla',
//         "energy": 5
//     },
//     {
//         "name": 'Scarlett Platón',
//         "nickname": 'scar',
//         "energy": 5
//     }
// ];

// data.push({
//     "name": 'Luis Miranda',
//     "nickname": 'root',
//     "energy": 3
// })
// console.log('dataaaaaaa', data);





// 8 Imprimir el índice correspondiente al elemento con valor 7
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(data.indexOf(7));



// 9 Solicitar un texto (prompt) e imprimir true si está presente en alguno de los textos en el arreglo, de lo contrario false
// let data = ['Natalia Saavedra', 'Scarlett Platón', 'Andrea Castro', 'Andrea Miranda', 'Daniela Olivares', 'Luis Miranda'];

// let text = prompt('escribe nombre');
// const matchName = data.includes(text);
// console.log('data', matchName);





// 10 Imprimir el arreglo al revés y multiplicado por 3
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let dataMod = data.map((e) => e * 3).reverse();
// let dataMod = data.reverse().map((e) => e * 3);
// console.log(dataMod);






// 11 Imprime la suma los elementos del arreglo multiplicado por 10
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log('reduce', data.reduce((acc, cv) => acc + cv));

// const reducer1 = (acc, cv) => acc + cv;
// console.log('reduce', data.reduce(reducer1));

// const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
// let sum = data.reduce(reducer) * 10;
// console.log('data con suma de todos los elementos *10', sum);






// 12 Imprime el arreglo ordenado ascendentemente multiplicado por 2
// let data = [0, 22, -1, 30, 45, -10, 10, 100, 70];

// let data2 = data.sort((a, b) => a - b).map((e) => e * 2);
// console.log('multiplicado', data2);






// 13 Imprime el arreglo ordenado descendentemente multiplicado por 4
// let data = [0, 22, -1, 30, 45, -10, 10, 100, 70];

// let data2 = data.sort((a, b) => b - a).map((e) => e * 4);
// console.log('multiplicado', data2);




// 14 Imprime un arreglo que contenga solamente los últimos 5 objetos
// let data = [
//     {
//         "name": 'Luis Miranda',
//         "nickname": 'root',
//         "energy": 3
//     },
//     {
//         "name": 'Andrea Castro',
//         "nickname": 'zwiva',
//         "energy": 5
//     },
//     {
//         "name": 'Daniela Olivares',
//         "nickname": 'dani',
//         "energy": 5
//     },
//     {
//         "name": 'Natalia Saavedra',
//         "nickname": 'root',
//         "energy": 5
//     },
//     {
//         "name": 'Andrea Miranda',
//         "nickname": 'chinchilla',
//         "energy": 5
//     },
//     {
//         "name": 'Scarlett Platón',
//         "nickname": 'scar',
//         "energy": 5
//     }
// ];

// data.shift();
// console.log('despues*', data);

// console.log('slice1', data.slice(1));
// console.log('slice2', data.slice(1, 3));
// console.log('data', data);




// 15 Usando el arreglo crear una función donde ingresas día y mes, y te retorne el acumulado de cantidad días
// desde el primero de enero hasta la fecha ingresada
// const data_dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const funcion_pedida1 = (dia, mes) => {
//     let seleccion = mes > 1 ? data_dias.slice(0, m) : [0];
//     const reducer1 = (acc, cv) => acc + cv;
//     // console.log('reduce', seleccion.reduce(reducer1));
//     let suma_mes = seleccion.reduce(reducer1);
//     let incluye_dias = suma_mes + dia;
//     console.log(incluye_dias);
//     return incluye_dias;

// };

// const funcion_pedida2 = (dia, mes) => {
    
//     let nuevo =data_dias.slice(0, mes - 1).reduce((a, b) => a + b) + dia;
    
//     return nuevo;
    
// };



// const funcion_pedida3 = (dia, mes) => {
    
//     return mes > 1 ? data_dias.slice(0, mes - 1).reduce((acc, cv) => acc + cv) + dia : 0 + dia;
    
// };


// console.log('resultado fp2', funcion_pedida1(1, 1));

// console.log('resultado fp2', funcion_pedida2(31, 12));

// console.log('resultado fp3', funcion_pedida3(2, 3));
