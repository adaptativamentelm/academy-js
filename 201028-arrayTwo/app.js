let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let button = document.getElementsByTagName('button')[0];
let sections = document.getElementsByTagName('section');
let data = [];

const init = async () => {
    for (let x = 0; x < qty.length; x++) {
        let user = await getData(`${urlGet}${qty[x]}`);
        data.push(user[0]);
    }
    draw(data);
};

const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const draw = (arr) => {
    let h1 = document.createElement('h1');
    h1.innerHTML = arr.map((data) => data.name).join(' - ');
    sections[1].appendChild(h1);
};

button.addEventListener('click', init);