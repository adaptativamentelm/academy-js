let login = 'https://portal-be.adaptativamente.cl/reporteria/academy/login';
let inputs = document.getElementsByTagName('input');
let button = document.getElementById('button');

const postLogin = async () => {
    try {
        const payload = {
            "method": 'POST',
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({ "user": inputs[0].value, "pass": Number(inputs[1].value) })
        };
        const response = await fetch(login, payload);
        let data = await response.json();
        validate(data);
    } catch (e) {
        console.log(e);
        validate([]);
    }
}

const validate = (data) => {
    if (data.length) {
        localStorage.setItem('data', JSON.stringify(data[0]));
        location.assign('one/one.html');
    }
}

button.addEventListener('click', postLogin);