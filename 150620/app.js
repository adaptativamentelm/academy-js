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

function showPass() {
    pass.type = pass.type === "text" ? pass.type = "password" : "text";
}

function validate() {
    if (user.value && pass.value) {
        if (user.value === removeDiacritics(`${jsonObject.name[0]}${jsonObject.lastName}`.toLowerCase()) && pass.value === `${jsonObject.rut.replace("-", "").substr(0, 4)}`) {
            alert("Credenciales correctas!");
            resetInputs();
        } else {
            alert("Credenciales incorrectas!");
        }
    } else {
        alert("No se ingresaron credenciales");
    }
}

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function resetInputs() {
    user.value = "";
    pass.value = "";
}
// SECTION 1

// SECTION 2
let date = document.getElementById("date");
let inputsRadio = document.getElementsByClassName("radio");
let inputsCheckbox = document.getElementsByClassName("checkbox");

function getInformation() {
    let response = {};
    response.date = date.value;
    let choice = "";
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
    console.log("Respuesta:", response);
}

function getInformation2() {
    let response = {
        "date": date.value,
        "choice": Array.from(inputsRadio).filter(data => data.checked).map(data => data.value)[0],
        "interests": Array.from(inputsCheckbox).filter(data => data.checked).map(data => data.value)
    };
    console.log("Respuesta:", response);
}
// SECTION2
