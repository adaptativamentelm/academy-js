let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let data = [];
let odds = document.getElementById('odd');
let evens = document.getElementById('even');
let catcher = document.getElementById('catcher');
let input_get = document.getElementById('input_get');
let finder_user = document.getElementById('finder_user');
let run_all = document.getElementById('run_all');

// seccion 1: llamado automatico por get, filtrado por condicion, impresion en 2 subsecciones
// seccion 2: llamado por post, seleccion de 1 id, impresion

const catchTheId = () => { //enviar seleccion
    let find_id = Number(input_get.value);
    // console.log(find_id);
    getAllData(find_id);
    // getDataByPost(find_id);
}

//_________________________________________________________________

const getData = async () => {
    const response = await fetch(get);
    data = await response.json();  
    processing();
};

const getDataByPost = async (id) => {
    try {
        let payload = {
            "id": id
        };
        let req = { "method": 'POST', "headers": { 'Content-Type': 'application/json' }, "body": JSON.stringify(payload) };
        const response = await fetch(post, req);
        data = await response.json();
        draw_user_info();    
    } catch (e) {
        console.log(e);
    }
}

const getAllData = async () => {

    // const response = await fetch(get) : await fetch(post,req);
    
};

//___________________________________________________________________

const processing = () => {
    for (let x = 0; x < data.length; x++) {
        drawing(data[x].name, data[x].id % 2 === 0);
    }
};

//____________________________________________________________________

const drawing = (str, isEven) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = str;
    isEven ? evens.appendChild(h2) : odds.appendChild(h2);
};

const draw_user_info = () => {
    // console.log(data[0].id);
    // console.log(data[0].user);
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.innerHTML = `ID: ${data[0].id}`;
    p2.innerHTML = `NAME: ${data[0].name}`;
    p3.innerHTML = `USER: ${data[0].user}`;
    finder_user.appendChild(p1);
    finder_user.appendChild(p2);
    finder_user.appendChild(p3);
}

catcher.addEventListener('click', catchTheId);