const jsonObject = {
    name: "Luis",
    lastName: "Miranda",
    rut: "23745869-9"
};

let img = document.getElementById('img');
img.style.width = "100%";
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let date = document.getElementById('date');
let inputsRadio = document.getElementsByClassName('radio');
let inputsCheckbox = document.getElementsByClassName('checkbox');

function showPass() {
    pass.type = pass.type === 'text' ? pass.type = 'password' : 'text';
}

function validate() {
    if (user.value && pass.value) {
        if (user.value === `${jsonObject.name.substr(0, 1).toLowerCase()}${jsonObject.lastName.toLowerCase()}` && pass.value === `${jsonObject.rut.replace('-', '').substr(0, 4)}`) {
            alert('Credenciales correctas!');
            resetInputs();
        } else {
            alert('Credenciales incorrectas!');
        }
    } else {
        alert('No se ingresaron credenciales');
    }
}

function resetInputs() {
    user.value = '';
    pass.value = '';
}

function getInformation() {
    let response = {
        date: date.value,
        choice: Array.from(inputsRadio).filter(data => data.checked).map(data => data.value)[0],
        interests: Array.from(inputsCheckbox).filter(data => data.checked).map(data => data.value)
    };
    console.log('Respuesta:', response);    
}

function getInformation2() {
    let response = {};
    response.date = date.value;
    let choice = '';
    for (let x = 0; x < inputsRadio.length; x++) {
        if (inputsRadio[x].checked) {
            choice = inputsRadio[x].value;
            break;
        }
    }
    response.choice = choice;
    let interests = [];
    for (let x = 0; x < inputsCheckbox.length; x++) {
        if (inputsCheckbox[x].checked) {
            interests.push(inputsCheckbox[x].value);
        }
    }
    response.interests = interests;
    console.log('Respuesta:', response);
}
