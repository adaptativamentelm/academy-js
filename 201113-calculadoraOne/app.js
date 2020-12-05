let showResultInput = document.getElementById("resultado");
let input = document.getElementById("inputNum");
let numericalInputs = document.getElementsByClassName("Num");

const mathInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", ":", "^", "*", ",", "√"];
const mathSymbols = ["+", "-", "*", ":", "/", "^", "√"];
const mathPriorty1 = ["*", "/"];
const mathPriorty2 = ["√", "^"]
let operators = [];

let operators2 = []; //experimento para operaciones con diferentes prioridades , () , * , / , etc.
let numbers2 = [];
let pars = [];

let n1 = "";

const checkInput = () => { //input solo numerico o con operadores matematicos.
    let data = input.value.split("");
    let lastInput = data[data.length - 1];
    if (!mathInputs.includes(lastInput) || (lastInput === data[data.length - 2] && mathSymbols.includes(lastInput))) {
        input.value = input.value.slice(0, data.length - 1);
    } else {
        if (mathSymbols.includes(lastInput)) { // cambiar, se guarda los simbolos que se escriben a pesar de borrarlos con backspace
            if (lastInput === ":") {
                operators.push("/");
            } else {
                operators.push(lastInput)
            }
        }
    }
    if (event.keyCode === 13) { //considera el enter para iniciar el calculo.
        result();
    }
};





const result = () => {
    let inputValue = input.value.split("+").join(" ").split("-").join(" ").split("*").join(" ").split("/").join(" ").split("^").join(" ").split("√").join(" ").split(" "); //deja solo los numeros dentro de un arreglo
    console.log("valor input: ", inputValue);
    console.log("operadores pre: ", operators);
    if (inputValue[0] === "") { //para considera el caso que el primer numero sea negativo :( )
        operators = operators.slice(1);
        inputValue = inputValue.slice(1);
        if (input.value[0] === "+") {
            inputValue[0] = "+" + inputValue[0];
        } else {
            inputValue[0] = "-" + inputValue[0];
        }
    }

    // for (let k = 0; k < operators.length; k++) { // pruebas para anexar el negativo al numero, 
    //     if (operators[k] === "-") {
    //         let a = operators.slice(0, k);
    //         let b = operators.slice(k + 1, operators.length);
    //         operators2.push(a.concat(b));
    //         inputValue[k + 1] = "-" + inputValue[k + 1];
    //     }
    //     console.log(inputValue);
    // }
    // console.log("operadores post: ", operators2);
    // let z = [];
    // operators2[0].forEach(element => {
    //     z.concat(element);
    //     console.log(z);
    // });
    // operator = z;
    // console.log("opedarores finales: ", operators);

    let calcNumber = Number(inputValue[0].replace(",", ".")) // para considerar el primer digito 

    // for (let j = 0; j < operators.length; j++) { // prueba para dar prioridad de operaciones 8raiz potencia -> mult/div -> suma y resta 
    //     console.log("entro");
    //     console.log(operators[j] + " esta en " + mathPriorty1);
    //     if (mathPriorty1.includes(operators[j])) {
    //         numbers2.push(mathFunction(inputValue[j], inputValue[j + 1], operators[j]));
    //         pars.push([j, j + 1]);

    //     }
    // }

    for (let i = 1; i < inputValue.length; i++) {
        switch (operators[i - 1]) {
            case "+":
                calcNumber += Number(inputValue[i].replace(",", "."));
                break;
            case "-":
                calcNumber -= Number(inputValue[i].replace(",", "."));
                break;
            case "/":
                calcNumber /= Number(inputValue[i].replace(",", "."));
                break;
            case "*":
                calcNumber *= Number(inputValue[i].replace(",", "."));
                break;
            case "^":
                calcNumber **= Number(inputValue[i].replace(",", "."));
                break;
            case "√":
                calcNumber = Number(inputValue[i].replace(",", ".")) ** (1 / calcNumber);
                break;
        }
        console.log(calcNumber);
    }
    showResultInput.value = calcNumber;
    if (isNaN(showResultInput.value)) {
        showResultInput.value = "SYNTAX ERROR";
        return;
    }
    operators = [];
    input.focus();
    input.value = "";
    numbers2 = [];
    pars = [];
}

let calculate = (divButton) => {
    let comando = divButton.innerHTML;
    input.value += comando;
    checkInput()
}

let del = () => {
    if (mathSymbols.includes(input.value[input.value.length - 1])) {
        operators.pop();
    }
    input.value = input.value.slice(0, -1);
}

let clearevery = () => {
    input.value = "";
    showResultInput.value = "";
    operators = [];
}


const mathFunction = (n1, n2, mathOperator) => {
    let calcNumber;
    switch (mathOperator) {
        case "+":
            calcNumber = Number(n1.replace(",", ".")) + Number(n2.replace(",", "."));
            break;
        case "-":
            calcNumber = Number(n1.replace(",", ".")) - Number(n2.replace(",", "."));
            break;
        case "/":
            calcNumber = Number(n1.replace(",", ".")) / Number(n2.replace(",", "."));
            break;
        case "*":
            calcNumber = Number(n1.replace(",", ".")) * Number(n2.replace(",", "."));
            break;
        case "^":
            calcNumber = Number(n1.replace(",", ".")) ** Number(n2.replace(",", "."));
            break;
        case "√":
            calcNumber = Number(n2.replace(",", ".")) ** (1 / Number(n1.replace(",", ".")));
            break;
    }
    return calcNumber
};

input.addEventListener('keyup', checkInput);
input.focus();