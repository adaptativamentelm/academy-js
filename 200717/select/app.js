// let option1 = document.getElementById("option1");
// let option2 = document.getElementById("option2");
// let option3 = document.getElementById("option3");

let selectElement = document.getElementById('select');
console.log('Elementos contenidos en el select:', selectElement.options);

function myFunction() {
    console.log('Índice de la opción seleccionada:', selectElement.selectedIndex);
    console.log('Valor de la opción seleccionada:', selectElement.options[selectElement.selectedIndex].value);
}
