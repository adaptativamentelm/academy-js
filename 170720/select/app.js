let option1 = document.getElementById("1");
let option2 = document.getElementById("2");

// imprimir valor de input seleccionado

// function myFunction() {
//     if (option1.selected) {
//         console.log(option1.value);        
//     }
//     if (option2.selected) {
//         console.log(option2.value);        
//     }
// }

let selected = document.getElementById('selected');

function myFunction() {
    console.log(selected.options);
    console.log(selected.selectedIndex);
}