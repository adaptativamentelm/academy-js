//OBTENCION DE ELEMENTO HTML
const btnNumbers =  document.getElementsByName("data-number"); //botonNumeros
//console.log(btnNumbers);
const btnOpera= document.getElementsByName("data-opera");
//console.log(btnOpera);
const btnIgual = document.getElementsByName("data-igual")[0];
//console.log(btnIgual);
const btnDelete = document.getElementsByName("data-delete")[0];
//console.log(btnDelete);
let Result  = document.getElementById("result");
//console.log(result);

let operActual = '';
let operAnterior = '';
let operacion = undefined;

//EVENTO DOM
btnNumbers.forEach((boton) => {
    boton.addEventListener('click', () => {
        agregarNumero(boton.innerText);
        //alert(boton.innerText);
    })
})

btnOpera.forEach((boton) => {
    boton.addEventListener('click', () => {
        seleccionarOperacion(boton.innerText);
        //alert(boton.innerText);
        
    })
})

btnIgual.addEventListener('click', () => {
    calcular();
    actualizarDisplay();
});

btnDelete.addEventListener('click', () => {
    clear();
    actualizarDisplay();
});

//LOGICA DE LA CALCULADORA
 //seleccionar operación con las condiciónes
 const seleccionarOperacion = (op) =>{
     if(operActual === '')return;
     if(operAnterior!== ''){
         calcular();
     }
     operacion = op.toString();
     operAnterior = operActual;
     operActual = '';
 }
//parseFloat es para convertir en numero
 const calcular = ()=>{
     let calculo;
     const anterior = parseFloat(operAnterior);
     const actual =parseFloat(operActual);
     if(isNaN(anterior) || isNaN(actual)) return;
     
     switch(operacion){
         case'+':
             calculo =anterior + actual;
            break;
         case '-':
            calculo = anterior - actual;
            break;
         case '*':
             calculo = anterior * actual;
             break;
        case '/':
            calculo = anterior / actual;
            break;
        case'^':
            calculo = anterior ** actual ;
            break;
        /*case'raiz':
            calculo = math.pow(anterior, actual);
        break;*/
        default:
            return;

     }
     operActual = calculo;
     operacion = undefined;
     operAnterior = '';
 }


//f(x) paratomarla cadena de n° y convertirla en texto y que se pueda concatenar
const agregarNumero =  (num)=>{
    operActual = operActual.toString() + num.toString();
    actualizarDisplay()
}
//f(x) para limpiar el input
const clear = ()=>{
    operActual = '';
    operAnterior = '';
    operacion= undefined;
}

  const actualizarDisplay = () =>{
    Result.value = operActual;
  }

  clear();
