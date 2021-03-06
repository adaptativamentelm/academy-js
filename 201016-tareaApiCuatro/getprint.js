let header = document.getElementsByTagName('header')[0];
let back = document.getElementById('back');
let forward = document.getElementById('forward');

const init = () => {
    JSON.parse(localStorage.getItem('data')) ? print(JSON.parse(localStorage.getItem('data'))) : logout();
};

const print = (data) => {
    let h1 = document.createElement('h1');
    h1.innerHTML = `Bienvenid@ ${data.name}`;
    header.appendChild(h1);
};

const logout = () => {
    localStorage.clear();
    location.replace('../index.html');
}

const goTo = (option) => {
    switch (true) {
        case location.href.includes('one'): // Devuelve true si en cuentra one en la ruta actual
            option === 1 ? logout() : location.assign('../two/two.html');
            break;
        case location.href.includes('two'):
            option === 1 ? location.assign('../one/one.html') : location.assign('../three/three.html');
            break;
        case location.href.includes('three'):
            option === 1 ? location.assign('../two/two.html') : location.assign('../four/four.html');
            break;
        case location.href.includes('four'):
            option === 1 ? location.assign('../three/three.html') : logout();
            break;
        default:
            console.log('Ruta no encontrada');
            logout();
    }
};

back.addEventListener('click', () => goTo(1));
// back.addEventListener('click', () => { goTo(1) }); // lo mismo línea 36
// back.addEventListener('click', function () { goTo(1) }); // lo mismo línea 36
forward.addEventListener('click', () => goTo(2));
init();