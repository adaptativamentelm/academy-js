let name = document.getElementById('name');
let pass = document.getElementById('pass');
let print = document.getElementById('print');

let form_info = document.getElementsByName('form');

let food_list = document.getElementsByClassName('food');
let title = document.getElementsByTagName('h1');

title[0].innerHTML = 'andrea!';

print.addEventListener('click', () => {
    console.log('name:', name.value);
    console.log('pass:', pass.value);

    for (let x = 0; x < form_info.length; x++) {
        if (form_info[x].checked) {
            console.log('radios:', form_info[x].value);
        }
    }

    for (let i = 0; i < food_list.length; i++) {
        if (food_list[i].checked) {
            console.log('comida:', food_list[i].value);
        }
    }
});

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