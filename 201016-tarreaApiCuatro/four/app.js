let main = document.getElementsByTagName('main')[0];
let date = 135;
let year = 366;

const draw = () => {
    let h1 = document.createElement('h1');
    h1.innerHTML = `Mi cumpleaños cae en el ${calculate(date, year)}% del año`;
    main.appendChild(h1);
};

const calculate = (x, total) => {
    return x * 100 / total;
};

draw();