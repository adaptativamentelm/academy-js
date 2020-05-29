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
// var message = document.getElementById("message").value;
// display_message.innerHTML= message;
function soloNumeros() {
    const pass = document.getElementById('pass');
    if (pass.value.charCodeAt(pass.value.length - 1) < 48 || pass.value.charCodeAt(pass.value.length - 1) > 57) {
        pass.value = pass.value.slice(0, pass.value.length - 1);
    }
}

function printData() {
    window.location.replace('tusdatos.html');
    const data = document.getElementsByClassName('form');
    const radioform = document.getElementsByClassName('radioform');
    const checkform = document.getElementsByClassName('checkform');
    for (let x = 0; x < data.length; x++) {
        data[x].id === 'pass' ? prints.innerHTML = (`${data[x].value}`) : console.log(data[x].value);
    }
   
    for (let x = 0; x < radioform.length; x++) {
        if (radioform[x].checked) {
            prints.innerHTML = radioform[x].value;
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
    prints.innerHTML = intereses;
}