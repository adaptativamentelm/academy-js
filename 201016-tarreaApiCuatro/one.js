let payloadSave = JSON.parse(localStorage.getItem('payload'));
console.log(payloadSave);
let userName = payloadSave[0].name;
let userId = payloadSave[0].id;
let sectionWelcome = document.getElementsByClassName('welcome')[0];
let backButton1 = document.getElementById('back1');
let forwardButton1  = document.getElementById('forward1');

const drawing = (name, id) => {
    let h2Welcome = document.createElement('h2');
    h2Welcome.innerHTML = `Bienvenid${(id == 6) || (id == 7) || (id == 8) ? "o "+ name : "a "+ name}`;
    sectionWelcome.appendChild(h2Welcome);
}

const back1 = () => {
    location.href = 'index.html';   
}
const forward1 = () => {
    location.href = 'two.html';  
}
drawing(userName, userId);

backButton1.addEventListener('click', back1);
forwardButton1.addEventListener('click', forward1);