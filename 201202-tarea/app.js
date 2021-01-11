let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';

let button = document.getElementById('get')
let data = [];
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getData = async () => {
    for (let x = 1; x < qty.length; x++) {
        let response = await fetch(urlGet+x);
        data = await response.json();
        console.log('data',data[0]);
        processing(data);
    }
};
const processing = (data) => {
    if (data[0].typeid == 1) {
        drawing(data[0].name)
    } else {
        console.log('no se imprime nada')
    }
};

const drawing= (e)  => {
    let h2 = document.createElement ('h2');
    h2.innerHTML = e
};

button.addEventListener('click', getData);