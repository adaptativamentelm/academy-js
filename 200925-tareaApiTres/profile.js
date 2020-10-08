const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id';
let data = [];
let id = localStorage.getItem('id');
let section = document.getElementById('main');

const payload = {
    "method": 'POST',
    "headers": { 'Content-Type': 'application/json' },
    "body": JSON.stringify({ "id": Number(id) })
};

const getData = async (url, payload) => {
    const response = await fetch(url, payload);
    data = await response.json();
    console.log('data', data);
    drawing();
};

getData(userByIdUrl, payload);

const drawing = () => {
    let draw_user_id = document.createElement('h2');
    let draw_user_name = document.createElement('h2');
    let draw_user_user = document.createElement('h2');
    let draw_user_rol = document.createElement('h2');
    let draw_hr = document.createElement('hr');
    let draw_user_img = document.createElement('img')
    draw_user_id.innerHTML = `ID: ${data[0].id}`;
    draw_user_name.innerHTML = `Name: ${data[0].name}`;
    draw_user_user.innerHTML = `User: ${data[0].user}`;
    draw_user_rol.innerHTML = `Rol: ${data[0].typename == 'teacher'? 'profesor':'estudiante'}`;
    draw_user_img.src = data[0].img;
    draw_user_img.height = 250;
    draw_user_img.width = 300;

    section.appendChild(draw_user_id);
    section.appendChild(draw_user_name);
    section.appendChild(draw_user_user);
    section.appendChild(draw_user_rol);
    section.appendChild(draw_hr);
    section.appendChild(draw_user_img);
}
