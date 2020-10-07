let information = JSON.parse(localStorage.getItem('information')) ? JSON.parse(localStorage.getItem('information')) : null;

if (information) {
    console.log('Hola bebe', information);
} else {
    localStorage.clear();
    location.href = 'index.html';
}