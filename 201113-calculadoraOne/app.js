
let operationA = [];
let operationB = [];
let operation = [];

let screen = document.getElementById('screen');
let seven = document.getElementById('seven');
let eigth = document.getElementById('eigth');
let nine = document.getElementById('nine');
let division = document.getElementById('division');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let multiplication = document.getElementById('multiplication');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let subtraction = document.getElementById('subtraction');
let same = document.getElementById('same');
let reset = document.getElementById('reset');
let zero = document.getElementById('zero');
let addition = document.getElementById('addition');
let dot = document.getElementById('dot');
let square = document.getElementById('square');
let potency = document.getElementById('potency');


one.addEventListener('click', function () {
    screen.textContent = screen.textContent + "1";
});
two.addEventListener('click', function () {
    screen.textContent = screen.textContent + "2";
});
three.addEventListener('click', function () {
    screen.textContent = screen.textContent + "3";
});
four.addEventListener('click', function () {
    screen.textContent = screen.textContent + "4";
});
five.addEventListener('click', function () {
    screen.textContent = screen.textContent + "5";
});
six.addEventListener('click', function () {
    screen.textContent = screen.textContent + "6";
});
seven.addEventListener('click', function () {
    screen.textContent = screen.textContent + "7";
});
eigth.addEventListener('click', function () {
    screen.textContent = screen.textContent + "8";
});
nine.addEventListener('click', function () {
    screen.textContent = screen.textContent + "9";
});
zero.addEventListener('click', function () {
    screen.textContent = screen.textContent + "0";
});
dot.addEventListener('click', function () {
    screen.textContent = screen.textContent + '.';
});
reset.addEventListener('click', function () {
    clean();
});
addition.addEventListener('click', function () {
    operationA = screen.textContent + "+";
    operation = "+";
    clean();
});
subtraction.addEventListener('click', function () {
    operationA = screen.textContent;
    operation = "-";
    clean();
});
same.addEventListener('click', function () {
    operationB = screen.textContent;
    solve();
});

const clean = () => {
    screen.textContent = "";
}

const solve = () => {
    let res = 0;
    switch (operation) {
        case "+":
            res = parseInt(operationA) + parseInt(operationB);
            break;
        case "-":
            res = parseInt(operationA) - parseInt(operationB);
            break;
    }
    screen.textContent = res;
}
