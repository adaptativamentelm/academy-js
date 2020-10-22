let payloadSave = JSON.parse(localStorage.getItem('payload'));
let userName = payloadSave[0].name;
let userId = payloadSave[0].id;
let sectionWelcome = document.getElementsByClassName('welcome')[0];
let backButton2 = document.getElementById('back2');
let forwardButton2  = document.getElementById('forward2');

const drawing = (name, id) => {
    let h2Welcome = document.createElement('h2');
    h2Welcome.innerHTML = `Bienvenid${(id == 6) || (id == 7) || (id == 8) ? "o "+ name : "a "+ name}`;
    sectionWelcome.appendChild(h2Welcome);
}

const back2 = () => {
    location.href = 'one.html';   
}
const forward2 = () => {
    location.href = 'three.html';  
}
drawing(userName, userId);
backButton2.addEventListener('click', back2);
forwardButton2.addEventListener('click', forward2);