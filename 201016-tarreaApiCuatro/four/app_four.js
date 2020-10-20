let section_title = document.getElementById('title');
let back = document.getElementById('back');
let percent_year = document.getElementById('percent_year');


const print_title = () => {
    let title = document.createElement('h2');
    let data = localStorage.getItem('data');
    let json_data = JSON.parse(data);
    title.innerHTML = `Bienvenida bella ${json_data[0].name}`;
    section_title.appendChild(title);
}

const goBack = () => {
    location = "../three/three.html"
}

back.addEventListener('click', goBack);

const percent = () => {
    let percent_of_year = 9/366*100;
    console.log(percent_of_year);
    let full_message = document.createElement('h3'); 
    full_message.innerHTML = `Mi cumpleaños cae en el ${percent_of_year}% del año`;
    percent_year.appendChild(full_message);
}
percent();
print_title();