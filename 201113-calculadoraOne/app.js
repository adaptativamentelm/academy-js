const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
const opers = [
    {
        "name": 'add',
        "symbol": '+'
    },
    {
        "name": 'subtract',
        "symbol": '-'
    }
];
let display = document.getElementById('display');
let buttons = document.getElementById('buttons');

const draw = (place, content) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = content;
    div.appendChild(h1);
    switch (place) {
        case 1:
            break;
        case 2:
            div.classList.add('button', 'calc', 'txt-center');
            buttons.appendChild(div);
    }
};

const init = () => {
    opers.forEach((data) => {
        nums.push(data.symbol);
    });
    nums.forEach((data) => {
        draw(2, data);
    });
};

init();