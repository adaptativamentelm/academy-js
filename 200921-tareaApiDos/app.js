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
        let id = document.createElement('h2');
        id.innerHTML = `ID: ${data[0].id}`;
        postResult.appendChild(id);
        let nameU = document.createElement('h2');
        nameU.innerHTML = `NAME: ${data[0].name}`;
        postResult.appendChild(nameU);
        let user = document.createElement('h2');
        user.innerHTML = `USER: ${data[0].user}`;
        postResult.appendChild(user);
        // createW(id, data[0]);
        // createW(name, data[0]);
        // createW(user, data[0]);
    } catch (error) {
        console.log(error);
    }
}
// const createW = (pico, position) =>{
//     let element = document.createElement('h2');
//     let wea = pico.toString();
//     wea.toUpperCase();
//     element.innerHTML = `${wea}: ${position.pico}`;
//     postResult.appendChild(element);
// }
send.addEventListener('click', funcPost);