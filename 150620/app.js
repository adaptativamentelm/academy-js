// HEADER
document.getElementById("img").style.width = "100%";
// HEADER

// SECTION 1
const jsonObject = {
    "name": "Luis",
    "lastName": "Miranda",
    "rut": "23745869-9"
};
let user = document.getElementById("user");
let pass = document.getElementById("pass");

function showPass1() {
    if (pass.type === "text") {
        pass.type = "password";
    } else {
        pass.type = "text";
    }
}

function showPass2() {
    pass.type = pass.type === "text" ? "password" : "text";
}

// Scarlett Platón
// SPlatón `${jsonObject.name[0]}${jsonObject.lastName}`
// splatón `${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase()
// splaton removeDiacritics(`${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase())

// 23745869-9
// 237458699 `${jsonObject.rut.replace("-", "")
// 2374 `${jsonObject.rut.replace("-", "").substr(0, 4)}`

function validate1() {
    // console.log(`${jsonObject.name[0]}${jsonObject.lastName}`);
    // console.log(`${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase());
    // console.log(removeDiacritics(`${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase()));
    if (user.value && pass.value) {
        if (removeDiacritics(user.value.toLowerCase()) === removeDiacritics(`${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase()) && pass.value === `${jsonObject.rut.replace("-", "").substr(0, 4)}`) {
            okResetInputs();
        } else {
            alert("Credenciales incorrectas!");
        }
    } else {
        alert("Falta ingresar usuario y/o contraseña")
    }
}

function validate2() {
	user.value && pass.value ? removeDiacritics(user.value.toLowerCase()) === removeDiacritics(`${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase()) && pass.value === `${jsonObject.rut.replace("-", "").substr(0, 4)}` ? okResetInputs() : alert("Credenciales incorrectas!") : alert("Falta ingresar usuario y/o contraseña");
}

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function okResetInputs() {
	alert("Credenciales correctas!");
    user.value = "";
	pass.value = "";
	user.focus();
}
// SECTION 1

// SECTION 2
let date = document.getElementById("date");
let inputsRadio = document.getElementsByClassName("radio");
let inputsCheckbox = document.getElementsByClassName("checkbox");

function printInformation1() {
    let response = {};
    response.date = date.value;
    for (let x = 0; x < inputsRadio.length; x++) {
        if (inputsRadio[x].checked) {
            response.choice = inputsRadio[x].value;
            break;
        }
    }
    let interests = [];
    for (let x = 0; x < inputsCheckbox.length; x++) {
        if (inputsCheckbox[x].checked) {
            interests.push(inputsCheckbox[x].value);
        }
    }
    response.interests = interests;
	response.date && response.choice && response.interests.length ? console.log("Respuesta:", response) : console.log("Faltan datos");
}

function printInformation2() {
    let response = {
        "date": date.value,
        "choice": Array.from(inputsRadio).filter(data => data.checked).map(data => data.value)[0],
        "interests": Array.from(inputsCheckbox).filter(data => data.checked).map(data => data.value)
    };
    response.date && response.choice && response.interests.length ? console.log("Respuesta:", response) : console.log("Faltan datos");
}
// SECTION2
