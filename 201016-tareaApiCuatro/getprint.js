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
        case location.href.includes('one'):
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
    }
};

back.addEventListener('click', () => goTo(1));
forward.addEventListener('click', () => goTo(2));
init();