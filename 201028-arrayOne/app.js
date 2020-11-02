const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let input = document.getElementById('input');
let main = document.getElementsByTagName('main')[0];
let data = [];

const getData = async (url) => {
    const response = await fetch(url);
    data = await response.json();
    processing(data);
};

const finding = () => {
    deleteFromMain();
    let found = data.filter((el) => el.name.toLowerCase().includes(input.value.toLowerCase()));
    processing(found);
};

const processing = (arr) => {
    arr.forEach((data) => {
        drawing(data);
    });
};

const drawing = (obj) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = obj.name;
    main.appendChild(h2);
};

const deleteFromMain = () => {
    let h2s = document.getElementsByTagName('h2');
    for (let x = h2s.length - 1; x >= 0; x--) {
        h2s[x].remove();
    }
};

getData(getUrl);
input.addEventListener('keyup', finding);
