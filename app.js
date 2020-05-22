
function login() {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    if (user.value && pass.value) {
        if (user.value === 'us' && pass.value === '123') {
            console.log('login bueno');
            user.value = '';
            pass.value = '';
            window.location.replace('home.html');
        } else {
            user.value = '';
            pass.value = '';
            alert('Usuario y/o contraseña incorrectos');
        }
    } else {
        alert('Los campos usuario y contraseña son obligatorios');
    }
}

function obtenerDataRadio() {
    let value;
    const radios = document.getElementsByClassName('radio');
    for (let x = 0; x < radios.length; x++) {
        if (radios[x].checked) {
            value = radios[x].value;
            break;
        }
    }
    console.log('value', value);
    return value;
}

function obtenerChecks() {
    let value = [];
    const checks = document.getElementsByClassName('check');
    for (let x = 0; x < checks.length; x++) {
        if (checks[x].checked) {
            value.push(checks[x].value);
        }
    }
    console.log('value', value);
    return value;
}

function permitoSoloNumeros() {
    const phone = document.getElementById('phone');
    if (phone.value.charCodeAt(phone.value.length - 1) < 48 || phone.value.charCodeAt(phone.value.length - 1) > 57) {
        // En el input phone se escribe el número 9
        // phone.value = 9
        // phone.value.length = 1
        // phone.value.charCodeAt(0) = 57
        phone.value = phone.value.slice(0, phone.value.length - 1);
    }
}

function printData() {
    const data = document.getElementsByClassName('form');
    const radioform = document.getElementsByClassName('radioform');
    const checkform = document.getElementsByClassName('checkform');
    for (let x = 0; x < data.length; x++) {
        data[x].id === 'phone' ? console.log(`+56 9 ${data[x].value}`) : console.log(data[x].value);
    }
    for (let x = 0; x < radioform.length; x++) {
        if (radioform[x].checked) {
            console.log(radioform[x].value);
            break;
        }
    }
    let intereses = [];
    for (let x = 0; x < checkform.length; x++) {
        if (checkform[x].checked) {
            intereses.push(checkform[x].value);
        }
    }
    console.log('Intereses:', intereses);
}

/* <input type="radio" id="input1" checked class="radioform"></input>
<input type="radio" id="input2" class="radioform"></input> */
// let input1 = {
//     type: "radio",
//     id: "input1",
//     checked: true,
//     class: "radioform"
// };
// let input2 = {
//     type: "radio",
//     id: "input2",
//     checked: false,
//     class: "radioform"
// }
// // ***************************
// let porId = { // id = input1 -> getElementById("input1")
//     type: "radio",
//     id: "input1",
//     checked: true,
//     class: "radioform"
// };
// let porClass = [ // class = radioform -> getElementsByClassName("radioform")
//     {
//         type: "radio",
//         id: "input1",
//         checked: true,
//         class: "radioform"
//     },
//     {
//         type: "radio",
//         id: "input2",
//         checked: false,
//         class: "radioform"
//     }
// ];
