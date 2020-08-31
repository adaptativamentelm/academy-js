let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let res = document.getElementById('res');
let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let potencia = document.getElementById('potencia');
let raiz = document.getElementById('raiz');

res.style.border = '2px solid pink';
res.style.padding = '3px';

function sum() {
    try {
        if (num1.value && num2.value) {
            res.innerHTML = parseInt(num1.value) + parseInt(num2.value);
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }    
}

function rest() {
    try {
        if (num1.value && num2.value) {
            res.innerHTML = num1.value - num2.value;
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }
}

function multi() {
    try {
        if (num1.value && num2.value) {
            res.innerHTML = num1.value * num2.value;
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }    
}

function div() {
    try {
        if (num1.value && num2.value) {
            res.innerHTML = num1.value / num2.value;
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }    
}

function pow () {
    try {
        if (num1.value && num2.value) {
            res.innerHTML = Math.pow(num1.value, num2.value);
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }
}

function raiznums() {
    try {
        if (num1.value && num2.value) {
            let indice = 1/num2.value;
            res.innerHTML = Math.pow(num1.value, indice);
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }
}

function error() {
    num1.value = '';
    num2.value = '';
    res.innerHTML = '';
    num1.focus();
}

res.addEventListener('click', error);
sumar.addEventListener('click', sum);
restar.addEventListener('click', rest);
multiplicar.addEventListener('click', multi);
dividir.addEventListener('click', div);
potencia.addEventListener('click', pow);
raiz.addEventListener('click', raiznums);