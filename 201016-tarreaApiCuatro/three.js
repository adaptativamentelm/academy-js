let backButton3 = document.getElementById('back3');
let forwardButton3  = document.getElementById('forward3');

const back3 = () => {
    location.href = 'two.html';   
}
const forward3 = () => {
    location.href = 'welcome.html';  
}

backButton3.addEventListener('click', back3);
forwardButton3.addEventListener('click', forward3);