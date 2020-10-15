let sections = document.getElementsByTagName('section');
let information = JSON.parse(localStorage.getItem('information')) ? JSON.parse(localStorage.getItem('information')) : null;

const getData = async (info) => {
    const payload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({ "id": info.id })
    };
    let response = await fetch (info.url, payload);
    let data = await response.json();
    drawInfo(data[0]);
};

const drawInfo = (info) => {
    let id = document.createElement('h1');
    id.innerHTML = `ID: ${info.id}`;
    let name = document.createElement('h1');
    name.innerHTML = `Name: ${info.name}`;
    let user = document.createElement('h1');
    user.innerHTML = `User: ${info.user}`;
    let type = document.createElement('h1');
    type.innerHTML = info.typeid === 1 ? 'Rol: Estudiante' : 'Rol: Profesor';
    sections[0].appendChild(id);
    sections[0].appendChild(name);
    sections[0].appendChild(user);
    sections[0].appendChild(type);
    let img = document.createElement('img');
    img.src = info.img;
    sections[1].appendChild(img);
};

if (information) {
    getData(information);
} else {
    localStorage.clear();
    location.href = 'index.html';
}