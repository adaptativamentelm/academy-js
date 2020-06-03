// let h2Title = document.getElementsByTagName('h2');
// h2Title[0].innerHTML = "Prueba Chocolate";
let ul = document.getElementById('contenedor');
let contador = 0;

function agregarTarea() {
    const toDoContenido = document.getElementById('toDoContenido');
    if (toDoContenido.value) {
        contador++;
        let li = document.createElement('li');
        li.id = `li_${contador}`;
        let check = document.createElement('input');
        check.type = "checkbox";
        check.id = `tarea_${contador}`;
        check.value = toDoContenido.value;
        let label = document.createElement('label');
        label.setAttribute("for", `tarea_${contador}`);
        label.innerHTML = toDoContenido.value;
        let button = document.createElement('button');
        button.name = `li_${contador}`;
        button.innerHTML = "Eliminar";
        button.onclick = function () {
            eliminarTarea(this.name);
        };
        li.appendChild(check);
        li.appendChild(label);
        li.appendChild(button);
        ul.appendChild(li);
    } else {
        alert('Debe ingresar una tarea');
    }
}
 
function eliminarTarea(name) {
    const li = document.getElementById(name);
    if (li.getElementsByTagName('input')[0].checked) {
        ul.removeChild(li);
    } else {
        alert('Debes seleccionar el checkbox para poder eliminar la tarea');
    }
}

// const eliminarTarea = () => {
//     console.log('elimino tarea');
// }
