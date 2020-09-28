let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let data = [];
let odds = document.getElementById('odd');
let evens = document.getElementById('even');
let user = document.getElementById('userid');
let find = document.getElementById('find');
let section = document.getElementById('data');

const getData = async (url, isGet, payload) => {
    const response = isGet ? await fetch(url) : await fetch(url, payload);
    data = await response.json();
    console.log('data', data);
    processing(isGet);
};

const processing = (isGet) => {
    if (isGet) {
        for (let x = 0; x < data.length; x++) {
            drawing(data[x].name, true, data[x].id % 2 === 0);
        }
    } else {
        clean();
        drawing(`Id: ${data[0].id}`, isGet, false);
        drawing(`Name: ${data[0].name}`, isGet, false);
        drawing(`User: ${data[0].user}`, isGet, false);
    }
};

const drawing = (str, isGet, isEven) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = str;
    isGet ? isEven ? evens.appendChild(h2) : odds.appendChild(h2) : section.appendChild(h2);
};

const clean = () => {
    let h3s = section.getElementsByTagName('h2');
    for (let x = h3s.length - 1; x >= 0; x--) {
        h3s[x].remove();
    }
};

const catchId = () => {
    const payload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({ "id": Number(user.value) })
    };
    getData(post, false, payload);
};

getData(get, true, null);
find.addEventListener('click', catchId);