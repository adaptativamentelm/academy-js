const jsonObject = {
    name: "Chinchilla",
    lastName: "Psico",
    rut: "18122171-2"
};
document.getElementById('header').style.width = '100%';
function show() {
    let pass = document.getElementById("pass");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
}
function section1() {
    let userGood = `${jsonObject.name[0]}`+`${jsonObject.lastName}`;
    let passGood = jsonObject.rut.substring(0,4);
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass');
    if (user.toLowerCase() == userGood.toLowerCase() && pass.value == passGood) {
        console.log(" contraseña y usuario correctos");
    }else{
      console.log("usuario y/o contraseña incorrectos", userGood, passGood);
    } 
}