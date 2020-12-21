let urlGet = 'https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/';
let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let button = document.getElementById('button');
let divContainer = document.getElementById('divContainer');
let divButton = document.getElementById('divButton');
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
            let containerUser = document.createElement('div');
            divContainer.appendChild(containerUser);
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let user = document.createElement('h3');
            let img = document.createElement('img');
            let buttonDiv = document.createElement('button');
            img.src = arr[i].img;
            h2.innerHTML = arr[i].name;
            h3.innerHTML = arr[i].id;
            user.innerHTML = `User: ${arr[i].user}`;
            containerUser.id = `divId${arr[i]}`;
            buttonDiv.innerHTML = 'borrar';
            containerUser.appendChild(h2);
            containerUser.appendChild(h3);
            containerUser.appendChild(user);
            containerUser.appendChild(img);
            containerUser.appendChild(buttonDiv);
            buttonDiv.addEventListener('click', deleteDiv.bind(null, containerUser));

    }
    
    
};

function deleteDiv(div) {
    console.log('div borrado', div);
    div.innerHTML = '';
    
}

show();
