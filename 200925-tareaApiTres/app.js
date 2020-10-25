const listUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list'; // GET
const descUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/description'; // GET
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id'; // POST
// let nav = document.getElementsByTagName('nav')[0];
let info = document.getElementById('info');
let ul = document.getElementsByTagName('ul')[0];

const firtsFunc = async () => {
    try {
        let response = await fetch(listUrl);
        let data = await response.json();
        // console.log(data);
        drawing(data);
    } catch {
        console.log('error');
    }
}
firtsFunc();

const drawing = (data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        let list = document.createElement('li');        
        let h1 = document.createElement('h1');        
        let img = document.createElement('img');
        h1.innerHTML = `${data[i].id} - ${data[i].name}`;
        h1.addEventListener('click', function (){
            console.log(data[i].id);
            let jsons = {
                "id": data[i].id,
                "url": userByIdUrl 
            };
            localStorage.setItem('jsons', JSON.stringify(jsons));
            location.assign('profile.html')
        } );
        img.src = data[i].typeimg;   
        img.height = 50;
        img.width = 50;
        list.appendChild(h1);
        list.appendChild(img);
        ul.appendChild(list);
    }
};
// ------- segunda parte de la tarea
const secondFunc = async () => {
    try {
        let response = await fetch(descUrl);
        let data = await response.json();
        console.log('++++++++', data);
        secondDrawing(data);
    } catch (e) {
        console.log(e);
    }
};
secondFunc();

const secondDrawing = (data) => {
    let p = document.createElement('p');    
    let p1 = document.createElement('p');    
    let p2 = document.createElement('p');
    let img = document.createElement('img');
    p.innerHTML = `Company: ${data.company}` ;
    p1.innerHTML = `Name: ${data.name}` ;
    p2.innerHTML = `Date: ${data.year} - ${data.month+1} - ${data.day}`;
    img.src = data.img;
    img.height = 100;
    img.width = 100;
    info.appendChild(p);
    info.appendChild(p1);
    info.appendChild(p2);
    info.appendChild(img);
}
