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
        localStorage.setItem('payload', JSON.stringify(data));
        location.href = 'welcome.html';
        
    } catch (error) {
        console.log('payload', payload);
        console.log(error);
    }
}

button.addEventListener('click', getPost);