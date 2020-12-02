let botonNumber = document.getElementsByName('data-number');
let botonOpera = document.getElementsByName('data-opera');
let botonIgual = document.getElementsByName('data-igual')[0];
let botonDelete = document.getElementsByName('data-delete')[0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined; //por defecto

botonNumber.forEach(function (boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText)
    })
});
botonOpera.forEach(function(boton){
   boton.addEventListener('click', function(){
       selectOperacion(boton.innerText);        
   })
});

botonIgual.addEventListener('click', function(){
   calcular();
   actualizarDisplay();    
});

botonDelete.addEventListener('click', function(){
   clear();
   actualizarDisplay();
});

function agregarNumero(num){
   opeActual = opeActual.toString() + num.toString();
   actualizarDisplay();
}
function actualizarDisplay(){
   result.value = opeActual;
}