const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description';
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id';
let data = [];
let nav = document.getElementById('nav');
let ul;

const getData = async () => {
    try {
        let response = await fetch(listUrl);
        data = await response.json();
        console.log(data);
        create_list()
        // create_each_item();

    } catch (e) {
        console.log(e);
    }
}

const create_list = () => {
    ul = document.createElement('ul');
    nav.appendChild(ul);
    create_each_item();
}

const create_each_item = () => {
    for (i = 0; i < data.length; i++ ){   
        let li = document.createElement('li');
        let img = document.createElement('img');
        li.innerHTML = data[i].id;
        img.src = data[i].typeimg;
        img.height=100;
        ul.appendChild(li);
        ul.appendChild(img);
    }
}
getData();

//__________________________________

