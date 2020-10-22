let main = document.getElementsByTagName('main')[0];

const draw = () => {
    let h1 = document.createElement('h1');
    h1.innerHTML = `Mi cumpleaños cae en el ${calcPercent(14, 5)}% del año`;
    main.appendChild(h1);
};

const calcPercent = (day, month) => {
    const months = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const total = months.reduce((a, b) => a + b);
    months.splice(month - 1, 12 - month + 1, day);
    return Math.round(months.reduce((a, b) => a + b) / total * 100);
};

const calcPercent2 = (day, month) => {
    const months = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let total = 0;
    let mDay = 0;
    for (let x = 0; x < months.length; x++) {
        total += months[x];
        if (x < month - 1) {
            mDay += months[x];
        }
    }
    mDay += day;
    return Math.round(mDay / total * 100);
};

draw();