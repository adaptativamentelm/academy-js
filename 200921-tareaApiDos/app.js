let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let data = [];
let idUser = document.getElementById('idUser');
let postResult = document.getElementById('postResult');

const funcPost = async () => {
    try {
        let payload = {
            "id": parseInt(idUser.value) 
        };
        const req = { "method": 'POST', "headers": { 'Content-Type': 'application/json' }, "body": JSON.stringify(payload) };
        let response = await fetch(post, req);
        let data = await response.json();
        createW("ID", data[0].id);
        createW("NAME", data[0].name);
        createW("USER", data[0].user);
    } catch (error) {
        console.log(error);
    }
}
const createW = (str, position) =>{
    let element = document.createElement('h2');
    element.innerHTML = `${str}: ${position}`;
    postResult.appendChild(element);
}
send.addEventListener('click', funcPost);