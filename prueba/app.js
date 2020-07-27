let boton = document.getElementById('cualquiera');
boton.addEventListener('click', function () {
    alert('hola bebe');
});

document.addEventListener('fullscreenchange', function(event) {
    console.log('event ->', event.target);
    if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
        console.log('Leaving full-screen mode.');
    }
});

document.getElementById('toggle-fullscreen').addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.getElementById('fullscreen-div').requestFullscreen();
    }
});
