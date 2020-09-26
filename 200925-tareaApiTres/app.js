const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description';
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id';
let data_l = [];
let data_d = [];
let nav = document.getElementById('nav');
let ul;
let company_data = document.getElementById('company_data');

const getData_list = async () => {
    try {
        let response = await fetch(listUrl);
        data_l = await response.json();
        console.log(data_l);
        create_list();
    } catch (e) {
        console.log(e);
    }
}

const getData_desc = async () => {
    try {
        let response = await fetch(descUrl);
        data_d = await response.json();
        console.log(data_d);
        create_data_company();
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
    for (i = 0; i < data_l.length; i++ ){   
        let li = document.createElement('li');
        let img = document.createElement('img');
        li.innerHTML = data_l[i].id;
        img.src = data_l[i].typeimg;
        img.height=100;
        ul.appendChild(li);
        ul.appendChild(img);
    }
}

const create_data_company = () => {
    // console.log(data_d);
    // console.log(data.company);
    let titles = Object.keys(data_d);
    // console.log(title_company[0]);
    let company = document.createElement('h2');
    let name = document.createElement('h2');
    let date = document.createElement('h2');
    let img = document.createElement('img');
    let today = new Date();
    let month = today.getMonth();
    let current_month = month<10 ? `0${today.getMonth()+1}`:today.getMonth()+1;
    let day = today.getDate();
    company.innerHTML = `${titles[0]}: ${data_d.company}`;
    name.innerHTML = `${titles[1]}: ${data_d.name}`;
    date.innerHTML = `Date: ${data_d.year}-${current_month}-${day} (🤓)`;
    img.src = data_d.img;
    company_data.appendChild(company);
    company_data.appendChild(name);
    company_data.appendChild(date);
    company_data.appendChild(img);
}

getData_list();
getData_desc();

//---------------------------------------

//// INTENTO -fallido- DE RECICLAJE DE getData (los hice por separado al principio y funciono :'(
    // const getData = async (url) => {
    //     try {
    //         let response = await fetch(url);
    //         data = await response.json();
    //         // console.log(data);
    //         create_list()
    //         create_data_company();
    //         // create_each_item();
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    
    // const create_list = () => {
    //     ul = document.createElement('ul');
    //     nav.appendChild(ul);
    //     create_each_item();
    // }
    
    // const create_each_item = () => {
    //     for (i = 0; i < data.length; i++ ){   
    //         let li = document.createElement('li');
    //         let img = document.createElement('img');
    //         li.innerHTML = data[i].id;
    //         img.src = data[i].typeimg;
    //         img.height=100;
    //         ul.appendChild(li);
    //         ul.appendChild(img);
    //     }
    // }
    // //__________________________________
    
    // const create_data_company = () => {
    //     console.log(data);
    //     // console.log(data.company);
    //     let titles = Object.keys(data);
    //     // console.log(title_company[0]);
    //     let company = document.createElement('h2');
    //     let name = document.createElement('h2');
    //     let date = document.createElement('h2');
    //     let img = document.createElement('img');
    //     let today = new Date();
    //     let month = today.getMonth();
    //     let current_month = month<10 ? `0${today.getMonth()+1}`:today.getMonth()+1;
    //     let day = today.getDate();
    //     company.innerHTML = `${titles[0]}: ${data.company}`;
    //     name.innerHTML = `${titles[1]}: ${data.name}`;
    //     date.innerHTML = `Date: ${data.year}-${current_month}-${day} (🤓)`;
    //     img.src = data.img;
    //     company_data.appendChild(company);
    //     company_data.appendChild(name);
    //     company_data.appendChild(date);
    //     company_data.appendChild(img);
    // }
    
    // getData(listUrl);
    // getData(descUrl);