const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const others = [
    { "name": 'Change sign', "symbol": '+/-' },
    { "name": 'Decimal dot', "symbol": '.' },
    { "name": 'Clear', "symbol": 'AC' },
    { "name": 'Add', "symbol": '+' },
    { "name": 'Subtract', "symbol": '-' },
    { "name": 'Multiply', "symbol": 'x' },
    { "name": 'Divide', "symbol": '÷' },
    { "name": 'Power', "symbol": '^' },
    { "name": 'Root', "symbol": '√' },
    { "name": 'Equal', "symbol": '=' }
];
let display = document.getElementById('display');
let displayText = display.getElementsByTagName('h1')[0];
let buttons = document.getElementById('buttons');
let data = {
    "valueOne": '',
    "valueTwo": '',
    "operation": ''
};

const drawInHTML = (content, title) => {
    const div = document.createElement('div');
    div.classList.add('col', 'jyct-center', 'center', 'button', 'm-5');
    div.title = title;
    div.addEventListener('click', () => {
        typeof (content) === 'number' || content === '.' || content === '+/-' ? writeInDisplay(content) : fillOperation(content);
    });
    const h1 = document.createElement('h1');
    h1.innerHTML = content;
    div.appendChild(h1);
    buttons.appendChild(div);
};

const writeInDisplay = (content) => {
    switch (content) {
        case '+/-':
            displayText.innerHTML = Number(displayText.innerHTML) > 0 ? -Math.abs(Number(displayText.innerHTML)) : Math.abs(Number(displayText.innerHTML));
            break;
        case '.':
            displayText.innerHTML = displayText.innerHTML.includes('.') ? displayText.innerHTML : displayText.innerHTML === '' ? `0${content}` : `${displayText.innerHTML}${content}`;
            break;
        case 0:
            displayText.innerHTML = displayText.innerHTML === '0' ? displayText.innerHTML : `${displayText.innerHTML}${content}`;
            break;
        default:
            if (data.valueOne && data.valueTwo) {
                data.valueOne = '';
                data.valueTwo = '';
                data.operation = '';
                displayText.innerHTML = '';
            }
            displayText.innerHTML = displayText.innerHTML === '0' ? content : `${displayText.innerHTML}${content}`;
    }
}

const clearDisplay = () => {
    data.valueOne = '';
    data.valueTwo = '';
    displayText.innerHTML = '';
}

const fillOperation = (symbol) => {
    switch (symbol) {
        case 'AC':
            clearDisplay();
            break;
        case '=':
            if (data.valueOne) {
                data.valueTwo = displayText.innerHTML;
            }
            if (data.valueOne && data.valueTwo) {
                displayText.innerHTML = operate();
            }
            break;
        default:
            data.valueOne = displayText.innerHTML;
            displayText.innerHTML = '';
            data.operation = symbol;
    }
};

const operate = () => {
    console.log('data', data);
    switch (data.operation) {
        case '+':
            return Number(data.valueOne) + Number(data.valueTwo);
        case '-':
            return Number(data.valueOne) - Number(data.valueTwo);
        case 'x':
            return Number(data.valueOne) * Number(data.valueTwo);
        case '÷':
            return Number(data.valueOne) / Number(data.valueTwo);
        case '^':
            return Math.pow(Number(data.valueOne), Number(data.valueTwo));
        case '√':
            return Math.pow(Number(data.valueOne), 1 / Number(data.valueTwo));
    }
};

[...nums, ...others].forEach((data) => {
    typeof (data) === 'number' ? drawInHTML(data, `Number ${data}`) : drawInHTML(data.symbol, data.name);
});
