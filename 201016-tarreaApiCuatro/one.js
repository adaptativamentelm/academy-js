let backButton1 = document.getElementById('back1');
let forwardButton1  = document.getElementById('forward1');

const back1 = () => {
    location.href = 'index.html';   
}
const forward1 = () => {
    location.href = 'two.html';  
}

backButton1.addEventListener('click', back1);
forwardButton1.addEventListener('click', forward1);