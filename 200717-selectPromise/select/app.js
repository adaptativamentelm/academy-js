let options = document.getElementsByClassName('option');

let selectElement = document.getElementById('select');
console.log('Elementos contenidos en el select:', selectElement.options);

function myFunction() {
    console.log('Índice de la opción seleccionada:', selectElement.selectedIndex);
    console.log('Valor de la opción seleccionada:', selectElement.options[selectElement.selectedIndex].value);
}

// selectElement = {
//     "id": 'select',
//     "options": [
//         {
//             "value": '',
//             "selected": true,
//             "disabled": true,
//             "innerHTML": 'Elige opción',
//             "classList": [
//                 'option',
//             ]
//         },
//         {
//             "id": 'option1',
//             "value": 'Opción 1',
//             "selected": false,
//             "disabled": false,
//             "innerHTML": 'Opción 1',
//             "classList": [
//                 'option'
//             ]
//         },
//         {
//             "id": 'option2',
//             "value": 'Opción 2',
//             "selected": false,
//             "disabled": false,
//             "innerHTML": 'Opción 2',
//             "classList": [
//                 'option'
//             ]
//         },
//         {
//             "id": 'option3',
//             "value": 'Opción 3',
//             "selected": false,
//             "disabled": false,
//             "innerHTML": 'Opción 3',
//             "classList": [
//                 'option'
//             ]
//         }
//     ],
//     "selectedIndex": 2
// };
