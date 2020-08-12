let fullscreenDiv = document.getElementById('fullscreen');
let activateFs = document.getElementById('activatefs');
let image = document.getElementsByTagName('img');
let base = document.getElementById('base');
let exponent = document.getElementById('exponent');
let reset = document.getElementById('reset');
let resultPow = document.getElementById('resultPow');

image[0].style.width = '100%';

activateFs.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        fullscreenDiv.requestFullscreen();
    }
});

function square () {
    try {
        if (base.value && exponent.value) {
            resultPow.innerHTML = Math.pow(base.value, exponent.value);
        } else {
            error();
            alert('Error');
        }
    } catch {
        error();
        alert('Error');
    }
}

function error() {
    base.value = '';
    exponent.value = '';
    resultPow.innerHTML = '';
    base.focus();
}

reset.addEventListener('click', error);

exponent.addEventListener('blur', square);