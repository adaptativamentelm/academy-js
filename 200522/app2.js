function agregar() {
    let click = document.getElementById("escribe");
    if (click.value === "") {
        alert('Ingresa un texto en el input');
    } else {
        let lista = document.createElement("li");
        lista.innerHTML = click.value;
        document.getElementById("listaa").appendChild(lista);
        click.value = "";
    }
}
