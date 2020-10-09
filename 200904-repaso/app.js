// let name = document.getElementById('name');
// let pass = document.getElementById('pass');
// let print = document.getElementById('print');

// let form_info = document.getElementsByName('form');

// let food_list = document.getElementsByClassName('food');
// let title = document.getElementsByTagName('h1');

// title[0].innerHTML = 'andrea!';

// const imprimir = () => {
//     console.log('name:', name.value);
//     console.log('pass:', pass.value);

//     for (let x = 0; x < form_info.length; x++) {
//         if (form_info[x].checked) {
//             console.log('radios:', form_info[x].value);
//         }
//     }

//     for (let i = 0; i < food_list.length; i++) {
//         if (food_list[i].checked) {
//             console.log('comida:', food_list[i].value);
//         }
//     }
// }

// print.addEventListener('click', imprimir);

// print.addEventListener('click', () => {
//     console.log('name:', name.value);
//     console.log('pass:', pass.value);

//     for (let x = 0; x < form_info.length; x++) {
//         if (form_info[x].checked) {
//             console.log('radios:', form_info[x].value);
//         }
//     }

//     for (let i = 0; i < food_list.length; i++) {
//         if (food_list[i].checked) {
//             console.log('comida:', food_list[i].value);
//         }
//     }
// });

// let andrea = {
//     "name": 'Andreabb',
//     "lastname": 'Castro',
//     "print": () => console.log('hola soy andrea')
// };

// let scar = {
//     "name": 'Scar',
//     "lastname": 'Pla',
//     "print": () => console.log('hola soy scar')
// };

// console.log('andrea name1:', andrea.name);
// console.log('andrea name2:', andrea['name']);
// andrea.print();

// let bbs1 = [
//     andrea, scar
// ];

// let bbs2 = [{
//         "name": 'Andreabb',
//         "lastname": 'Castro',
//         "print": () => console.log('hola soy andrea')
//     },
//     {
//         "name": 'Scar',
//         "lastname": 'Pla',
//         "print": () => console.log('hola soy scar')
//     }
// ];

let str = 'String';
let num = 1;
let bool = true;
let arr = ['string', 1, true];
let obj = {
    'property': 'Propiedad',
    'length': 1
};

// '[\"string\", 1, true]'  ->  ['string', 1, true]
// '\{ \'property\': \'Propiedad\', \'length\': 1 \}' ->  { 'property': 'Propiedad', 'length': 1 }

localStorage.setItem('str', str);
localStorage.setItem('num', num);
localStorage.setItem('bool', bool);
localStorage.setItem('arr', JSON.stringify(arr));
localStorage.setItem('obj', JSON.stringify(obj));

let dataStr = localStorage.getItem('str'); // String
let dataNum = Number(localStorage.getItem('num')); // 1
let dataBool = JSON.parse(localStorage.getItem('bool')); // true
let dataArr = JSON.parse(localStorage.getItem('arr'));
let dataObj = JSON.parse(localStorage.getItem('obj'));

localStorage.clear();

console.log(dataStr);
console.log(dataNum);
console.log(dataBool);
console.log(dataArr);
console.log(dataObj);