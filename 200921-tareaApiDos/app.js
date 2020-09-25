let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let data = [];
let odds = document.getElementById('odd');
let evens = document.getElementById('even');

const getData = async () => {
    const response = await fetch(get);
    data = await response.json();
    console.log('data', data);
    processing();
};

const processing = () => {
    for (let x = 0; x < data.length; x++) {
        drawing(data[x].name, data[x].id % 2 === 0);
    }
};

const drawing = (str, isEven) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = str;
    isEven ? evens.appendChild(h2) : odds.appendChild(h2);
};

// getData();

let user = document.getElementById('userid');
let find = document.getElementById('find');
let section = document.getElementById('data');

const getDataPost = async () => {
    try {
        clean();
        const response = await fetch(post, {
            "method": 'POST',
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({ "id": Number(user.value)
        }) });
        data = await response.json();
        console.log('data', data);
        drawingPost(`Id: ${data[0].id}`);
        drawingPost(`Name: ${data[0].name}`);
        drawingPost(`User: ${data[0].user}`);
    } catch {
        console.log('ha ocurrido un error');
    }
};

const drawingPost = (str) => {
    let h3 = document.createElement('h3');
    h3.innerHTML = str;
    section.appendChild(h3);
};

const clean = () => {
    let h3s = document.getElementsByTagName('h3');
    for (let x = h3s.length - 1; x >= 0; x--) {
        h3s[x].remove();
    }
};

find.addEventListener('click', getDataPost);