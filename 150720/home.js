let h1 = document.getElementById('name');
h1.innerHTML = localStorage.getItem('name');

function back() {
    window.location.replace('index.html');
}
