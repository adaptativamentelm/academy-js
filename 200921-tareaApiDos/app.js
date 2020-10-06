let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let dataGet = [];
let dataPost = [];
let odds = document.getElementById('odd');
let evens = document.getElementById('even');
let user = document.getElementById('userid');
let find = document.getElementById('find');
let section = document.getElementById('data');


const processing = () => {
    for (let x = 0; x < dataGet.length; x++) {
        drawing(dataGet[x].name, dataGet[x].id % 2 === 0, 'get');
    }
};

const drawing = (str, isEven, call) => {
    if (call == 'post') {
        let h3 = document.createElement('h3');
        h3.innerHTML = str;
        section.appendChild(h3);
    }else{
        let h2 = document.createElement('h2');
        h2.innerHTML = str;
        isEven ? evens.appendChild(h2) : odds.appendChild(h2);
    }   
};

const getData = async (call) => {
    try {
        console.log(call);
        clean();
        if (call == 'post') {
            let jsonPost = {
                "method": 'POST',
                "headers": { 'Content-Type': 'application/json' },
                "body": JSON.stringify({ "id": Number(user.value)}) 
            }; 
            const response = await fetch(post, jsonPost);
            dataPost = await response.json();
            console.log(dataPost[0])
            drawing(`Id: ${dataPost[0].id}`,null, call);
            drawing(`Name: ${dataPost[0].name}`,null, call);
            drawing(`User: ${dataPost[0].user}`,null, call);
        }else{
            const response = await fetch(get);
            dataGet = await response.json();
            // return response;
            processing();
        }        
    }catch (error){
        console.log(error)
    }
};

const clean = () => {
    let h3s = document.getElementsByTagName('h3');
    for (let x = h3s.length - 1; x >= 0; x--) {
        h3s[x].remove();
    }
};

getData('get');
find.addEventListener('click', getData.bind(null, 'post'));