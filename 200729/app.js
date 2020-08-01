
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
let user_data ={};
let exit_way = document.getElementById('exit');

//---------telefono: max9 & soloNum
function phoneMaxLength() {
    phone.value = phone.value.slice(0,phone.maxLength);
}
phone.addEventListener('keyup', phoneMaxLength);

//---------mostrar/ocultar password
function showPassword() {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
showPass.addEventListener("click", showPassword); //showPassword pasa como parametro, por eso no va con ()

//---------armar paquete de data 
const getDataForm = () => { //nunca usar let!!! const imposibilita cambiar el valor de la funcion! let no!
    user_data.name = name.value;
    user_data.phone = phone.value;
    user_data.user = user.value;
    user_data.password = pass.value;
    for (i in radios) {
        if (radios[i].checked) {
            user_data.gender = radios[i].value; 
        }
    }
    hobbies = [];
    for (let i = 0 ; i < checks.length ; i++) {
        if (checks[i].checked) {
            hobbies.push(checks[i].value);
        }
    }
    user_data.hobbies = hobbies;
    localStorage.setItem('datos', JSON.stringify(user_data));
    console.log(user_data) //para ver
} 
save.addEventListener("click", getDataForm);

//---------borrar local storage
const exitForm = () => {
    localStorage.clear();
}
exit_way.addEventListener("click", exitForm);

// localStorage.setItem('miGato', 'karen');
// let cat = localStorage.getItem('miGato');
// console.log(cat); //karen
// // localStorage.removeItem('miGato');
// // localStorage.clear();

