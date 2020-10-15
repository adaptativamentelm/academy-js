let data = null;
let header = document.getElementsByTagName('header')[0];

const init = () => {
    data = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : null;
    if (data) {
        print();
    } else {
        localStorage.clear();
        location.replace('../index.html');
    }
};

const print = () => {
    let h1 = document.createElement('h1');
    h1.innerHTML = `Bienvenido ${data.name}`;
    header.appendChild(h1);
};

init();