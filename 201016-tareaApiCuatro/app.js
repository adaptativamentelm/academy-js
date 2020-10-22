let login = 'https://portal-be.adaptativamente.cl/reporteria/academy/login';
let inputs = document.getElementsByTagName('input');
let button = document.getElementById('button');

const getValues = async () => {
    if (inputs[0].value && inputs[1].value) {
        const requestPayload = {
            "method": 'POST',
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({ "user": inputs[0].value, "pass": Number(inputs[1].value) })
        };
        await postLogin(login, requestPayload);
    } else {
        alert('Debe ingresar el usuario y la contraseña');
    }
};

const postLogin = async (url, requestPayload) => {
    try {
        const response = await fetch(url, requestPayload);
        let data = await response.json();
        validate(data);
    } catch (e) {
        console.log('El error fue:', e);
        validate([]);
    }
}

const validate = (data) => {
    if (data.length) {
        localStorage.setItem('data', JSON.stringify(data[0]));
        location.assign('one/one.html');
    } else {
        alert('Usuario y/o contraseña incorrectos');
    }
}

button.addEventListener('click', getValues);