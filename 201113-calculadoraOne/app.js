const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const others = [
    {
        "name": 'Decimal dot',
        "symbol": '.'
    },
    {
        "name": 'Clear',
        "symbol": 'C'
    },
    {
        "name": 'Add',
        "symbol": '+'
    },
    {
        "name": 'Subtract',
        "symbol": '-'
    },
    {
        "name": 'Equal',
        "symbol": '='
    }
];
let display = document.getElementById('display');
let displayText = display.getElementsByTagName('h1')[0];
let buttons = document.getElementById('buttons');
let data = {
    "valueOne": 0,
    "valueTwo": 0,
    "operation": ''
}

const drawInHTML = (content, title) => {
    const div = document.createElement('div');
    div.classList.add('col', 'jyct-center', 'center', 'button', 'm-5');
    div.title = title;
    div.addEventListener('click', () => {
        typeof (content) === 'number' || content === '.' ? writeInDisplay(content) : operation(content);
    });
    const h1 = document.createElement('h1');
    h1.innerHTML = content;
    div.appendChild(h1);
    buttons.appendChild(div);
};

const writeInDisplay = (content) => {
    switch (content) {
        case '.':
            displayText.innerHTML = displayText.innerHTML.includes('.') ? displayText.innerHTML : displayText.innerHTML === '' ? `0${content}` : `${displayText.innerHTML}${content}`;
            break;
        case 0:
            displayText.innerHTML = displayText.innerHTML === '0' ? displayText.innerHTML : `${displayText.innerHTML}${content}`;
            break;
        default:
            displayText.innerHTML = displayText.innerHTML === '0' ? content : `${displayText.innerHTML}${content}`;
    }
}

const clear = () => {
    valueOne = 0;
    valueTwo = 0;
    displayText.innerHTML = '';
}

const operation = (symbol) => {
    data.valueOne = displayText.innerHTML;
    displayText.innerHTML = '';
    switch (symbol) {
        case 'C':
            clear();
            break;
        case '+':
            
        case '-':
        case '=':
    }
};

[...nums, ...others].forEach((data) => {
    typeof (data) === 'number' ? drawInHTML(data, `Number ${data}`) : drawInHTML(data.symbol, data.name);
});
