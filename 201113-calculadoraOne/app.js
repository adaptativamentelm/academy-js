
const btnNumber = document.getElementsByName("number");
const btnOpera = document.getElementsByName("operation");
const btnSame = document.getElementsByName("same")[0];
const btnDelete = document.getElementsByName("delete")[0];

var result = document.getElementById("result");
var currentOperation = "";
var previousOperation ="";
var operation = undefined;


btnNumber.forEach(function(boton){
    boton.addEventListener('click', function(){
        addNumber(boton.innerText);
    })
});

btnOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
       selectOperacion(boton.innerText)
    })
});

btnSame.addEventListener('click', function(){
    calcular()
    actualizarDisplay();
});

btnDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})




function selectOperacion(op){
    if(currentOperation === "") return;
    if(previousOperation!== ""){
calcular()
    }
    operation = op.toString();
    previousOperation = currentOperation
    currentOperation = "";
}
function calcular(){
    var calculo;
    const anterior = parseFloat(previousOperation);
    const actual = parseFloat(currentOperation)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operation){
        case "+":
            calculo = anterior + actual;
            break;
            case "-":
                calculo = anterior - actual;
                break;
                case "x":
                    calculo = anterior * actual
                    break;
                    case "/":
                        calculo = anterior / actual;
                        break;
                        default:
                            return;
                         
    }
    currentOperation = calculo;
    operation = undefined;
    previousOperation = "";
}

function addNumber(num){
    currentOperation = currentOperation.toString() + num.toString();
    actualizarDisplay()
}

//funcion calcular potencia pow!


function CalcularExponencial(){
    const nBase = document.getElementById("Base").value;
    const nExponente = document.getElementById("Exponente").value;
    const exponencial = Math.pow(nBase,nExponente);
    alert ("el valor total seria:" + exponencial);
    }
    //funcion raiz sqrt

function clear(){
currentOperation = "";
previousOperation = "";
operation = "";
}

function actualizarDisplay(){
    result.value = currentOperation;
}

clear();