let section_title = document.getElementById('title');
let back = document.getElementById('back');
let forward = document.getElementById('forward');

const print_title = () => {
    let title = document.createElement('h2');
    let data = localStorage.getItem('data');
    let json_data = JSON.parse(data);
    title.innerHTML = `Bienvenida bella ${json_data[0].name}`;
    section_title.appendChild(title);
}

const goBack = () => {
    location = "../two/two.html"
}
const goForward = () => {   
    location = "../four/four.html"
}

back.addEventListener('click', goBack);
forward.addEventListener('click', goForward);
print_title();