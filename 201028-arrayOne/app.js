const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let input = document.getElementById('input');
let main = document.getElementsByTagName('main')[0];
let data = [];

const getData = async (url) => { // Para obtener la información de la Api Rest
    const response = await fetch(url);
    data = await response.json();
    console.log('data', data);
    processing(data);
};

const finding = () => { // Filtra los objetos en el arreglo
    deleteFromMain(); // Hasta acá está vacío el main, solamente tiene el input
    let found = data.filter((el) => el.name.toLowerCase().includes(input.value.toLowerCase()));
    processing(found);
};

const processing = (arr) => { // Recorrido del arreglo
    arr.forEach((data) => {
        drawing(data);
    });
};

const drawing = (obj) => { // Crea un h2, le escribe la propiedad name del objeto que recibe y agrego ese elemento al main
    let h2 = document.createElement('h2');
    h2.innerHTML = obj.name;
    main.appendChild(h2);
};

const deleteFromMain = () => { // Elimina todos los h2 del documento
    let h2s = document.getElementsByTagName('h2');
    for (let x = h2s.length - 1; x >= 0; x--) {
        h2s[x].remove();
    }
};

getData(getUrl);
input.addEventListener('keyup', finding);
