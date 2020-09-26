let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let data = [];
let odds = document.getElementById('odd');
let evens = document.getElementById('even');
let catcher = document.getElementById('catcher');
let input_get = document.getElementById('input_get');
let finder_user = document.getElementById('finder_user');

const getData = async () => {
    const response = await fetch(get);
    data = await response.json();
    console.log('data', data);
    processing();
};

const processing = () => {
    for (let x = 0; x < data.length; x++) {
        drawing(data[x].name, data[x].id % 2 === 0);
    }
};

const drawing = (str, isEven) => {
    let h2 = document.createElement('h2');
    h2.innerHTML = str;
    isEven ? evens.appendChild(h2) : odds.appendChild(h2);
};
//____________________________________________________________________

const getDataByPost = async (id) => {
    // console.log(id)
    try {
        let payload = {
            "id": id
        };
        const req = { "method": 'POST', "headers": { 'Content-Type': 'application/json' }, "body": JSON.stringify(payload) };
        let response = await fetch(post, req);
        let data = await response.json();
        // draw_user_info(data);
        console.log(data);
        draw_user_info(data);    
    } catch (e) {
        console.log(e);
    }
}

const catchTheId = () => {
    let find_id = Number(input_get.value);
    // console.log(find_id);
    getDataByPost(find_id);
}


const draw_user_info = (data) => {
    // console.log(data[0].id);
    // console.log(data[0].user);
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.innerHTML = 'ID: ' + data[0].id;
    p1.style.fontWeight = 'bold';
    p2.innerHTML = 'NAME: '+ data[0].name;
    p2.style.color = 'red';
    p3.innerHTML = 'USER: ' + data[0].user;
    p3.style.fontSize = '25px';
    
    finder_user.appendChild(p1);
    finder_user.appendChild(p2);
    finder_user.appendChild(p3);
}

catcher.addEventListener('click', catchTheId);