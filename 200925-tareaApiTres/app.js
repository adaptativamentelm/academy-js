const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description';
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id';
let ulSec1 = document.getElementById('ulSec1');
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let data = [];
let data2 = [];

// obtiene data primera sec.
const getData = async () => {
    const response = await fetch(listUrl);
    data = await response.json();
    loop();
};

// recorre la data para dibujarla
const loop = () => {
    for (let x = 0; x < data.length; x++) {
        draw(data[x].id, data[x].typeimg);    
    }
};

// // dibuja cada elemento
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

// --------------------------------------fin primera sec----------------------------------
// obtiene data segunda sec.
const getData2 = async () => {
    const response2 = await fetch(descUrl);
    data2 = await response2.json();
    console.log(data2);
    let companyName = document.createElement('h2');
    companyName.innerHTML = `Company: ${data2.company}`;
    section2.appendChild(companyName);
    let nameN = document.createElement('h2');
    nameN.innerHTML = `Name: ${data2.name}`;
    section2.appendChild(nameN);
    let date = document.createElement('h2');
    date.innerHTML = `Date: ${data2.year}-${data2.month >= 10 ? `${data2.month}` :`0${data2.month}`}-${data2.day}`;
    section2.appendChild(date);
    let image = document.createElement('img');
    image.src = data2.img;
    section2.appendChild(image);  
  
};

getData();
getData2();