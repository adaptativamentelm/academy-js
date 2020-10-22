let payloadSave = JSON.parse(localStorage.getItem('payload'));
let userName = payloadSave[0].name;
let userId = payloadSave[0].id;
let sectionWelcome = document.getElementsByClassName('welcome')[0];
let backButton3 = document.getElementById('back3');
let forwardButton3  = document.getElementById('forward3');

const drawing = (name, id) => {
    let h2Welcome = document.createElement('h2');
    h2Welcome.innerHTML = `Bienvenid${(id == 6) || (id == 7) || (id == 8) ? "o "+ name : "a "+ name}`;
    sectionWelcome.appendChild(h2Welcome);
}


const back3 = () => {
    location.href = 'two.html';   
}
const forward3 = () => {
    location.href = 'welcome.html';  
}
drawing(userName, userId);
backButton3.addEventListener('click', back3);
forwardButton3.addEventListener('click', forward3);