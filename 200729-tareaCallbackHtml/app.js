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

phone.addEventListener('keyup', () => {
    if (phone.value.charCodeAt(phone.value.length - 1) < 48 || phone.value.charCodeAt(phone.value.length - 1) > 57) {
        phone.value = phone.value.substr(0, phone.value.length - 1);
    }
});

showPass.addEventListener('click',  () => {
    pass.type = pass.type === 'password' ? 'text' : 'password';
});

const getDataForm = () => {
    for (let x = 0; x < radios.length; x++) {
        if (radios[x].checked) {
            genero = radios[x].value;
            break;
        }
    }
    for (let x = 0; x < checks.length; x++) {
        if (checks[x].checked) {
            hobbies.push(checks[x].value);
        }
    }
    let data = {
        name: name.value,
        phone: phone.value,
        user: user.value,
        pass: pass.value,
        genero,
        hobbies
    };
    localStorage.setItem('data', JSON.stringify(data));
}

save.addEventListener('click', getDataForm);
