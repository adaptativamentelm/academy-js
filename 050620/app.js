let titulo2 = document.getElementById('titulo2');

function cambiatitulo() {
    // console.log('tienes el boton');
    // nuevo_titulo= prompt('ingresa nuevo titulo');
    // titulo2.innerHTML = nuevo_titulo;
    titulo2.innerHTML = prompt('ingresa nuevo titulo');
}

//-----------------------<[*]>-------------------------//

let checkeado = document.getElementById('check');

function check_checkeado(){
    // console.log('esta andando esta funcion');
    if (checkeado.checked)
    console.log('si, esta seleccionado');
    else
    console.log('nop, no esta seleccionado!');
}

//-----------------------<[*]>-------------------------//

let activos = document.getElementsByClassName('inputc');
let pares1 = document.getElementById('two'); // para prueba, no escalable
let pares2 = document.getElementById('four'); // para prueba, no escalable

function los_activos() {
    // console.log('viendo los_activos');
    // console.log(activos)
    for (let i = 0; i < activos.length; i++) {
        const seleccionado = activos[i];
        if (seleccionado.checked)
        console.log(seleccionado.value);
    }
}
function alerta_mas_3() {
    // console.log('para mostrar los mas de 3');
    let seleccionados2 = [];
    for (let i = 0; i < activos.length; i++) {
        const seleccionado = activos[i];
        if (seleccionado.checked)
        seleccionados2.push(seleccionado);
    }
    if (seleccionados2.length > 3)
    alert('tienes mas de 3 seleccionados!')
    else
    console.log('tienes menos de 3 seleecionados')
}

function activa_solo_pares() {
    //considerando pares por posicion [0,1,2,3,4]
    //considerando pares por posicion [one,two,three,four,five]
    //considerando pares por posicion [impar,par,impar,par,impar]
    
    console.log('para activar los pares');
    if (pares1.id == "two" | pares1.id == "four")
    console.log('tomando los pares');
    
    //     
    //     if ( i%2 != 0 )
    //     console.log('posicion',i);
    //     //document.getElementById('two')
    //     //document.getElementById('four')
    
    //     seleccionado
    //     document.getElementById()
    //     titulo2.innerHTML = prompt('ingresa nuevo titulo');
    
    //     console.log('es un par');
    
}








function activa_solo_impares() { 
    console.log('para activar los impares');
    
}