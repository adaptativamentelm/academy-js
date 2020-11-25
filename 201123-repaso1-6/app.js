// let div = document.getElementsByTagName('div');
// div[0].innerHTML = 'Hola';
// div[1].innerHTML = 'Adiós';

// let inputs = document.getElementsByTagName('input');
// let input = document.getElementById('input');
// // input = inputs[0];

// let h1 = document.getElementsByName('h1');
// h1[0].innerHTML = 'Texto H1';

// let b1 = document.getElementById('b1');
// let b2 = document.getElementById('b2');

// const printOne = () => {
//     console.log('One');
// };

// const printTwo = () => {
//     console.log('Two');
// };

// const printThree = () => {
//     console.log('Three');
// };

// const printLog = () => {
//     console.log('Hola adiós');
//     printOne();
//     printTwo();
//     printThree();
// };

// b1.addEventListener('click', () => console.log('Hola adiós'));
// b1.addEventListener('click', printLog);
// b1.addEventListener('click', () => {
//     console.log('Hola adiós');
//     printOne();
//     printTwo();
//     printThree();
// });

// const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list'; // GET
// const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id'; // POST

// async function dataGET2 () {
// }

// const dataGET = async () => {
//     let response = await fetch(listUrl);
//     let data = await response.json();
//     console.log('data', data);
// };

// const dataPOST = async () => {
//     let requestPayload = { "id": 8 };
//     const obj = {
//         "method": 'POST',
//         "headers": { "Content-Type": 'application/json' },
//         "body": JSON.stringify(requestPayload)
//     };
//     let response = await fetch(userByIdUrl, obj);
//     let data = await response.json();
//     console.log('data', data);
// };

// b2.addEventListener('click', dataGET);
// b2.addEventListener('click', dataPOST);