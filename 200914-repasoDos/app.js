let mostrar = document.getElementById('mostrar');
let div = document.getElementById('div');

const title = () => {
    for (let i = 1; i < 7; i++) {
        create(`h${i}`);
    }
};

const create = (name) => {
    console.log('name', name);
    let newEl = document.createElement(name);
    newEl.innerHTML = 'Andrea';
    div.appendChild(newEl);
};

mostrar.addEventListener('click', title);