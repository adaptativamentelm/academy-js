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

const drawing = (str, isOdd) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = str;
    isOdd ? odds.appendChild(h2) : evens.appendChild(h2);
};

getData();