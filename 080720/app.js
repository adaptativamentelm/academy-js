// DEFER
// let andrea = document.getElementById('andrea');
// console.log('value:', andrea.value);

// // TRY CATCH
// function tryCatch () {
//     try {
//         newFunc();
//     } catch (e) {
//         console.log('e ->', e);
//     }
// }

// tryCatch();

// // Convenciones
// let name = 'Scar';
// let lastName = 'Pla';
// let fullName = `${name} ${lastName}`;
// let isBlack = true;
// const KEY_PASS = 'Holabb123!';
// let firstName = 'Luis';
// function lastName1(name) {
//     return `${name} Miranda`;
// }
// let lastName2 = (name) => {
//     return `${name} Miranda`;
// }
// console.log(lastName1(firstName));
// let students = [
//     { "id": 1, "name": 'Andrea' },
//     { "id": 2, "name": 'Igor' },
//     { "id": 3, "name": 'Chin' },
//     { "id": 4, "name": 'Miguel' },
//     { "id": 5, "name": 'Scar' }
// ];

// // Sin puntos
// // [
// //     1,
// //     [
// //         { "id": 1, "name": 'Andrea' },
// //         { "id": 2, "name": 'Igor' },
// //         { "id": 3, "name": 'Chin' },
// //         { "id": 4, "name": 'Miguel' },
// //         { "id": 5, "name": 'Scar' }
// //     ]
// // ]

// // Con puntos
// // [
// //     1,
// //     { "id": 1, "name": 'Andrea' },
// //     { "id": 2, "name": 'Igor' },
// //     { "id": 3, "name": 'Chin' },
// //     { "id": 4, "name": 'Miguel' },
// //     { "id": 5, "name": 'Scar' }
// // ]

// // Programación normal
// let newAr = [];
// for (let x = 0; x < students.length; x++) {
//     if (students[x].id < 4) {
//         newAr.push(students[x]);
//     }
// }
// console.log('newAr ->', newAr);

// // Programación funcional callback
// let newAr2 = students.filter(function (data) {
//     return data.id < 4;
// });
// console.log('newAr2 ->', newAr2);

// // Programación funcional ES6
// let newAr3 = students.filter(data => data.id < 4);
// console.log('newAr3 ->', newAr3);

// let other1 = [1, students];
// let other2 = [1, ...students];
// console.log('other1', other1);
// console.log('other2', other2);

// CALLBACK
// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);

// console.log('1');
// setTimeout(() => {
//     console.log('Timeout Andrea');
// }, 2000);
// console.log('2');


// const prom1 = new Promise((resolve, reject) => { resolve(true) });
// const prom2 = new Promise((resolve, reject) => { resolve(true) });
// const prom3 = new Promise((resolve, reject) => { resolve(true) });
// const prom4 = new Promise((resolve, reject) => { resolve(true) });
// const prom5 = new Promise((resolve, reject) => { resolve(true) });
// const prom6 = new Promise((resolve, reject) => { resolve(true) });
// const prom7 = new Promise((resolve, reject) => { resolve(true) });


// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 10);
//     setTimeout(() => number > 5 ? resolve(number) : reject(new Error('Menor a 5')), 1000);
// });

// promise
//     .then(number => console.log(number))
//     .catch(error => console.error(error));



// COMPARE
// let isAndrea = true;

// function exProm() {
//     return new Promise((resolve, reject) => {
//         isAndrea ? resolve(true) : reject(false);
//     });
// }

// async function exec1() {
//     try {
//         console.log('1');
//         const POKENAME = await (await fetch('https://pokeapi.co/api/v2/pokemon/1')).json();
//         console.log(await POKENAME.name);
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         console.log(await exProm());
//         let str = POKENAME.name.replace('bul', 'jajaja');
//         console.log('str:', str);
//         console.log('2');
//     } catch (e) {
//         console.log(e);
//     }
// }
// exec1();

// function exec2() {
//     console.log('1');
//     fetch('https://pokeapi.co/api/v2/pokemon/1').then(data => {
//         data.json().then(resp => {
//             console.log(resp.name);
//             exProm().then(new1 => {
//                 console.log(new1);
//                 exProm().then(new1 => {
//                     console.log(new1);
//                     exProm().then(new1 => {
//                         console.log(new1);
//                         exProm().then(new1 => {
//                             console.log(new1);
//                             exProm().then(new1 => {
//                                 console.log(new1);
//                                 exProm().then(new1 => {
//                                     console.log(new1);
//                                     exProm().then(new1 => {
//                                         console.log(new1);
//                                         exProm().then(new1 => {
//                                             console.log(new1);
//                                             exProm().then(new1 => {
//                                                 console.log(new1);
//                                                 exProm().then(new1 => {
//                                                     console.log(new1);
//                                                     let str = resp.name.replace('bul', 'jajaja');
//                                                     console.log('str:', str);
//                                                     console.log('2');
//                                                 }).catch(e => {
//                                                     console.log(e)
//                                                 });
//                                             }).catch(e => {
//                                                 console.log(e)
//                                             });
//                                         }).catch(e => {
//                                             console.log(e)
//                                         });
//                                     }).catch(e => {
//                                         console.log(e)
//                                     });
//                                 }).catch(e => {
//                                     console.log(e)
//                                 });
//                             }).catch(e => {
//                                 console.log(e)
//                             });
//                         }).catch(e => {
//                             console.log(e)
//                         });
//                     }).catch(e => {
//                         console.log(e)
//                     });
//                 }).catch(e => {
//                     console.log(e)
//                 });
//             }).catch(e => {
//                 console.log(e)
//             });
//         }).catch(e => {
//             console.log(e)
//         });
//     }).catch(e => {
//         console.log(e)
//     });
// }
// exec2();

// function getElement() {
//     let el = document.getElementById('andrea');
//     if (!el) {
//         throw 'Error al obtener elemento con id Andrea';
//     }
// }

// function exec() {
//     try {
//         getElement();
//     } catch (e) {
//         console.log('Este es el error ->', e);
//     }
// }

// exec();

function promises() {
    fetch('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
        res.json().then((data) => {
            console.log(data.name);
        }, (err) => {
            console.log('err', err);
        });
    }, (error) => {
        console.log('error', error);
    });
}

async function promises2() {
    try {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        let data = await res.json();
        console.log('data', data.name);
    } catch (e) {
        console.log('e', e);
    }
}

promises2();