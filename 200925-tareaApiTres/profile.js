
let redirectPge = document.getElementById('redirectPage');
let dataPost = [];
const userByIdUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/user-complete/id'; // POST
let idSave = Number(localStorage.getItem('id'));
const catchId = (id) => {

    console.log(id);
    const payload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({ "id": id })
    };
    getDataPost(userByIdUrl, payload, id);
};
const getDataPost = async (url, payload, id) => {
    try{
        const response = await fetch(url, payload);
        // console.log('url',url);          
        // console.log('id',id);
        dataPost = await response.json();
        console.log('dataPost', dataPost[0]);
        let h2Id = document.createElement('h2');
        h2Id.innerHTML = `ID: ${dataPost[0].id}`;
        redirectPage.appendChild(h2Id);
        let h2Name = document.createElement('h2');
        h2Name.innerHTML = `NAME: ${dataPost[0].name}`;
        redirectPage.appendChild(h2Name);
        let h2User = document.createElement('h2');
        h2User.innerHTML = `User: ${dataPost[0].user}`;
        redirectPage.appendChild(h2User);
        let h2Type = document.createElement('h2');
        h2Type.innerHTML = `Rol: ${dataPost[0].typeid === 1 ?'Estudiante':'Profesor'}`;
        redirectPage.appendChild(h2Type);
        let imgUser = document.createElement('img');
        imgUser.src = dataPost[0].img;
        imgUser.style.width = '30em';
        redirectPage.appendChild(imgUser);
        
    }catch(error){
        console.log(error);
    }
};
catchId(idSave);