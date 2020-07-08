// let andrea = document.getElementById('andrea');
// console.log('valor:', andrea.value);
// console.log('1');
// function greeting(name) {
//     console.log('greeting');
//     alert('Hello ' + name);
// }
// console.log('2');
// function processUserInput(callback) {
//     console.log('pui');
//     var name = prompt('Please enter your name.');
//     console.log('pui1');
//     callback(name);
//     console.log('pui2');
// }
// console.log('3');
// processUserInput(greeting);
// console.log('4');

// let cadena1 = 'Mañana va a llover';
// let cadena2 = cadena1.replace(`Mañana`, `Hoy`);
// console.log(cadena1);
// console.log(cadena2);

// console.log('1');
// setTimeout(() => {
//     console.log('Timeout Andrea');
// }, 2000);
// console.log('2');

// let isAndrea = true;

// function exProm() {
//     return new Promise((resolve, reject) => {
//         isAndrea ? resolve(true) : reject(false);
//     });
// }

// exProm().then(new1 => {
//     console.log(new1);
// }).catch(err => {
//     console.log(err);
// });

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

// getId().then(id => {
//     console.log('id:', id);
//     getDataUsuarioById(id).then(dataUsuarioById => {
//         console.log('dataUsuarioById:', dataUsuarioById);
//     });
// });

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


function anyFunc() {
    
}

function exec () {
    try {
        console.log(anyFunc());
    } catch (error) {
        console.log('Imprimo el error:', error);
    }
}

exec();
