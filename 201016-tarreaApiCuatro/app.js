let login = 'https://portal-be.adaptativamente.cl/reporteria/academy/login';
let inputs = document.getElementsByTagName('input');
let button = document.getElementById('button');
let milk = document.getElementById('milk');
let bar = document.getElementById('bar');
let user = document.getElementById('user');
let pass = document.getElementById('pass');

const draw_images = () => {
    let img_section_1 = document.createElement('img'); 
    let img_section_2 = document.createElement('img');
    img_section_1.src = "https://jackvaper1.b-cdn.net/wp-content/uploads/2018/08/vaso-leche-con-chocolate-1-e1435110640903-500x500.jpg";
    img_section_1.width=300;
    img_section_1.height=200;
    img_section_2.src = "https://www.manarchile.cl/wp-content/uploads/2018/05/Chocprem-leche.jpg";
    img_section_2.width=300;
    img_section_2.height=200;
    milk.appendChild(img_section_1);
    bar.appendChild(img_section_2);
}

const make_post = async () => {
    let id_data = { 
        "user": user.value, 
        "pass": Number(pass.value) 
    }
    const request_payload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify(id_data)
    }
    console.log(id_data);
    let response = await fetch(login, request_payload);
    let payload = await response.json();
    console.log(payload);
}

button.addEventListener('click', make_post);
draw_images();