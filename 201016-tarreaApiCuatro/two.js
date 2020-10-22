let backButton2 = document.getElementById('back2');
let forwardButton2  = document.getElementById('forward2');

const back2 = () => {
    location.href = 'one.html';   
}
const forward2 = () => {
    location.href = 'three.html';  
}

backButton2.addEventListener('click', back2);
forwardButton2.addEventListener('click', forward2);