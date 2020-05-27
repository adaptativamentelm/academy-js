// let h2Title = document.getElementsByTagName('h2');
// h2Title[0].innerHTML = "Prueba Chocolate";
let ul = document.getElementById('contenedor');

function agregarTarea() {
    const toDoContenido = document.getElementById('toDoContenido');
    if (toDoContenido.value) {

        let li = document.createElement('li');
        let check = document.createElement('input');
        check.type = "checkbox";
        check.id = "tarea";
        check.value = toDoContenido.value;
        let label = document.createElement('label');
        label.for = "tarea";
        label.innerHTML = toDoContenido.value;

        let button = document.createElement('button');
        button.innerHTML = "Delete";
        button.onclick = eliminarTarea;

        li.appendChild(check);
        li.appendChild(label);
        li.appendChild(button);
        ul.appendChild(li);

    } else {
        alert('Debe ingresar una tarea');
    }
}

function eliminarTarea() {
    console.log('elimino tarea');
}

// const eliminarTarea = () => {
//     console.log('elimino tarea');
// }
