
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

function verificarNumero() {
    const phone = document.getElementById('phone');
    if (phone.value.charCodeAt(phone.value.length - 1) === 96) {
        phone.value = phone.value.slice(0, phone.value.length - 2);
    }
    // la función chartCodeAt retorna un codigo ascii, el -1 es para que retorne el ultimo elemento, esto debido  que el lenght cuenta las weas como posiciones desde el 0, entonces si es menor a 48 (0) o mayor  a 57(9) hara la wea del slice, que borra el ultimo ele,ento escrito, recordar que esta función se ejecita cada vez qu escribo. si por el contrario no cumple estas condiciones no lo borra ya que es un numero y esto lo hemos validado con el chartCodeAt 
    if (phone.value.charCodeAt(phone.value.length - 1) < 48 || phone.value.charCodeAt(phone.value.length - 1) > 57) {
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