let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let main = document.getElementsByTagName('main')[0];
let data = [];

const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const init = async () => {
    for (let x = 0; x < qty.length; x++) {
        let resp = await getData(`${urlGet}${qty[x]}`);
        draw(resp[0]);
        data.push(resp[0]);
    }
};

const draw = (obj) => {
    let div = document.createElement('div');
    div.id = obj.id;
    let h1 = document.createElement('h1');
    h1.innerHTML = obj.name;
    let h31 = document.createElement('h3');
    h31.innerHTML = `Id: ${obj.id}`;
    let h32 = document.createElement('h3');
    h32.innerHTML = `User: ${obj.user}`;
    let img = document.createElement('img');
    img.src = obj.img;
    img.style = 'max-width: 200px';
    div.style = 'border: 1px solid black; margin: 20px; text-align: center';
    let button = document.createElement('button');
    button.innerHTML = 'Eliminar';
    button.addEventListener('click', () => {
        remove(obj.id);
    });
    div.appendChild(h1);
    div.appendChild(h31);
    div.appendChild(h32);
    div.appendChild(img);
    div.appendChild(button);
    main.appendChild(div);
};

const remove = (id) => {
    main.removeChild(document.getElementById(id));
};

init();