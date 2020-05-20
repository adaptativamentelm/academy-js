
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

[
    <input type="radio" value="opcion1"></input>,
    <input type="radio" value="opcion1"></input>,
    <input type="radio" value="opcion1"></input>
]

let input = {
    type: "radio",
    value: "opcion1",
    checked: false
};
