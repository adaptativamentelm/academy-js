// const { log } = require("console");

let login = 'https://portal-be.adaptativamente.cl/reporteria/academy/login';
let inputs = document.getElementsByTagName('input');
let button = document.getElementById('button');
let images = document.getElementsByTagName('img'); 
let info = document.getElementById('info');
images[0].style.width = '100%';
images[1].style.width = '100%';
info.style.fontSize = 'large';
const getPost = async () => {
    try {
        let payload = {
            "pass": Number(inputs[1].value),
            "user": inputs[0].value      
        };
        const req = { "method": 'POST', "headers": { 'Content-Type': 'application/json' }, "body": JSON.stringify(payload)};
        let response = await fetch(login, req);
        let data = await response.json();
        console.log('data', data);
        if (inputs[1].value == 1234 && inputs[0].value == 'amiranda') {
            localStorage.setItem('payload', JSON.stringify(data));
            location.href = 'one.html';
        }else{
            alert('usuario o contraseña incorrecto :c');
            inputs[1].value = '';
            inputs[0].value = '';            
        }
        
        
    } catch (error) {
        console.log('payload', payload);
        console.log(error);
    }
}

button.addEventListener('click', getPost);