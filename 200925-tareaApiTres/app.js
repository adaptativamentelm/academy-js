const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description';
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id';
let ulSec1 = document.getElementById('ulSec1');
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let data = [];

const getData = async () => {
    const response = await fetch(listUrl);
    data = await response.json();
    loop();
};

const loop = () => {
    for (let x = 0; x < data.length; x++) {
        draw(data[x].id, data[x].typeimg);
        
    }
};

const draw = (id, img) => {
    let li = document.createElement('li');
    let image = document.createElement('img');
    li.innerHTML = id;
    li.style.fontSize = '1.5em';
    let licont = ulSec1.appendChild(li);
    image.src = `${img}`;
    image.style.width = '30%';
    image.style.display = 'block';
    licont.appendChild(image);
    let br = document.createElement('br');
    licont.appendChild(br);
};

getData();