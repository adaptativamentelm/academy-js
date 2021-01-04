const div = document.createElement('div');
div.classList.add('red', 'orange', 'purple', 'green');

function add(param) { // Simulación -> probar
  let nuevo = [...param];
  div.classList.add(...nuevo);
}