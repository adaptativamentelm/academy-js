let name = document.getElementById('name');
let phone = document.getElementById('phone');
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let showPass = document.getElementById('showpass');
let radios = document.getElementsByName('radio');
let genero = '';
let checks = document.getElementsByClassName('checkbox');
let hobbies = [];
let save = document.getElementById('save');

showPass.addEventListener('click', showPassf);

function showPassf() {
    pass.type = pass.type === "text" ? "password" : "text";
}

const getDataForm = () => { 
    console.log('funciona');
    let response = {};
    response.name = name.value;
    response.phone = phone.value;
    response.user = user.value;
    response.pass = pass.value;
    for (let x = 0; x < radios.length; x++) {
        if (radios[x].checked) {
            response.genero = radios[x].value;
            break;
        }
    }
    for (let x = 0; x < checks.length; x++) {
        if (checks[x].checked) {
            hobbies.push(checks[x].value);
        }
    }
    
    response.hobbies = hobbies;
    response.name && response.phone && response.user && response.pass && response.genero && response.hobbies.length ? console.log("Respuesta:", response) : console.log("Faltan datos");

} // Esta función será llamada en el evento click del botón "Guardar datos"

save.addEventListener('click', getDataForm);






