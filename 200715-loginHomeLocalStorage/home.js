let h1 = document.getElementById('name');
h1.innerHTML = localStorage.getItem('name');

function back() {
    window.location.replace('index.html');
}

// localStorage.setItem('string', 'Cadena de texto');
// localStorage.setItem('number', 1);
// localStorage.setItem('object', JSON.stringify({ "key": 'value' }));
// localStorage.setItem('array', JSON.stringify([1, 2]));

// console.log(localStorage.getItem('string'));
// console.log(parseInt(localStorage.getItem('number')));
// console.log(localStorage.getItem('number'));
// // console.log(Number(localStorage.getItem('number')));
// console.log(JSON.parse(localStorage.getItem('object')));
// console.log(JSON.parse(localStorage.getItem('array')));

// localStorage.setItem('key', 'value');
// localStorage.getItem('key');
// localStorage.clear();
