let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let res = document.getElementById('res');
let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let potencia = document.getElementById('potencia');
let raiz = document.getElementById('raiz');

res.style.border = '2px solid purple';
res.style.textAlign = 'center';

const operar = (opcion) => {
    let resultado;
    try {
        if (!isNaN(Number(num1.value)) && !isNaN(Number(num2.value))) { // Si ambos valores son number
            switch (opcion) {
                case 1: // Suma
                    resultado = Number(num1.value) + Number(num2.value);
                    break;
                case 2: // Resta
                    resultado = Number(num1.value) - Number(num2.value);
                    break;
                case 3: // Multiplicación
                    resultado = Number(num1.value) * Number(num2.value);
                    break;
                case 4: // División
                    resultado = Number(num1.value) / Number(num2.value);
                    break;
                case 5: // Potencia
                    resultado = Math.pow(Number(num1.value), Number(num2.value));
                    break;
                case 6: // Raíz
                    resultado = Math.pow(Number(num1.value), 1 / Number(num2.value));
            }
        } else {
            resultado = 'Valor no operable';
        }
    } catch {
        resultado = 'Error';
    }
    res.innerHTML = resultado;
};

sumar.addEventListener('click', () => operar(1)); // Función escrita en una sola línea (sin llaves)
restar.addEventListener('click', () => operar(2));
multiplicar.addEventListener('click', () => operar(3));
dividir.addEventListener('click', () => operar(4));
potencia.addEventListener('click', () => operar(5));
raiz.addEventListener('click', () => operar(6));