let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let button = document.getElementById('button');
let divContainer = document.getElementById('divContainer');
let data = [];

const show = async () => {
    for (let x = 0; x < qty.length; x++) {
        let user = await getData(`${urlGet}${qty[x]}`);
        data.push(user[0]);
    }
    draw(data);
    console.log(data);
};

const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const draw = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].typeid === 1) {
            let h4 = document.createElement('h4');
            h4.innerHTML = arr[i].name
            divContainer.appendChild(h4);
        }else{
            console.log('este es un profe ♥', arr[i].name);
        }

    }
};

button.addEventListener('click', show);