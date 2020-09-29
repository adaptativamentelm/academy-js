const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description';
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id';
let data = [];
let info = document.getElementById('info');

const getList = async () => {
    const response = await fetch(listUrl);
    data = await response.json();
    console.log('Dataaaaa' , data);
    processing();
};

const processing = () => {
    for ( let x = 0; x < data.length; x++) {
        // console.log(data[x]);
        drawing(data[x].id)
        drawing2(data[x].typeimg);
        // console.log(data[x].typeimg);
    }
};

const drawing = (nro) => {
    let li = document.createElement ('li');
    li.innerHTML = nro;
    info.appendChild(li);
}

const drawing2 = (i) => {
    let imagen = new Image (100, 100);
    imagen.src=i;
    let img = document.createElement ('img');
    img.innerHTML = imagen;
    info.appendChild(imagen);
}


getList ();