const jsonObject = {
    name: "Scarlett",
    lastName: "Platón",
    rut: "26023173-1"
};

// let imagen1 = document.getElementById('imagen').innerHTML = '<img src ="./got7.jpg" />'; Funciona pero no pude cambiar el tamaño
// cambiar el tamaño de img por js
let yourImg = document.getElementById('yourImgId');
yourImg.style.width = '100%';


let contraseña = document.getElementById('input2')
function pass() {
    if (contraseña.type === 'password') {
        contraseña.type = 'text'

        console.log(contraseña.value)

    } else if (contraseña.type === 'text') {
        contraseña.type = 'password';
    }
}
function borrarTexto() {
    contraseña.value = "";
}
// opciones para obter la primera letra del nombre y el apellido completo juntos
// let user = `${jsonObject.name[0]}${jsonObject.lastName}`;

// let user3 = jsonObject.name.substr(0, 1) + jsonObject.lastName;
// let user4 = `${jsonObject.name.substr(0, 1)}${jsonObject.lastName}`;
// let user5 = jsonObject.name.substring(0, 1) + jsonObject.lastName;
// let user6 = `${jsonObject.name.substring(0, 1)}${jsonObject.lastName}`
let user2 = jsonObject.name[0] + jsonObject.lastName;
let psw = jsonObject.rut.substr(0, 4);
console.log(user2, psw)

// --------------------------- forma de la contraseña con for
// let psw = '';
// for (let i = 0; i < jsonObject.rut.length; i++){
//     if(4 > i){
//         psw = psw+jsonObject.rut[i]
//     }
// }
let usuario1 = document.getElementById('input1');
function validarUserPass() {
    if (user2 === usuario1.value) {
        console.log('siiii')
    } else {
        console.log('nop')
    };
}
// ---------------------------
let elegirfront = document.getElementById('front');
let elegirBack = document.getElementById('back');
let fechita = document.getElementById('input3');
let checkboxMarcados = document.getElementsByClassName('checkboss');
let marcadosFinal = [];
function intereses() {
    console.log(fechita.value);
    if ( elegirfront.checked ){
        console.log('es front')
    }else{
        console.log('es back')
    } 
    for (let i = 0; i < checkboxMarcados.length; i ++) {
        if (checkboxMarcados[i].checked) {
            marcadosFinal.push(checkboxMarcados[i].value);
        }else{
            console.log('')
        }
    } 
    console.log( marcadosFinal);
};
// ------------------------------
