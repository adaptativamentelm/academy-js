let fullscreenDiv = document.getElementById('fullscreen');
let activateFs = document.getElementById('activatefs');
let image = document.getElementsByTagName('img');
let base = document.getElementById('base');
let exponent = document.getElementById('exponent');
let reset = document.getElementById('reset');
let resultPow = document.getElementById('resultPow');


document.getElementById("img").style.width = "100%";

exponent.addEventListener('focusout', () => {
    let result = Math.pow(base.value, exponent.value);
    console.log(result,base.value, exponent.value);
    resultPow.innerHTML = result;    
});

activateFs.addEventListener('click', () => {
    if (image[0].requestFullscreen) {
        image[0].requestFullscreen();
      } else if (image[0].mozRequestFullScreen) { /* Firefox */
        image[0].mozRequestFullScreen();
      } else if (image[0].webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        image[0].webkitRequestFullscreen();
      } else if (image[0].msRequestFullscreen) { /* IE/Edge */
        image[0].msRequestFullscreen();
      }    
});

reset.addEventListener('click', () =>{
    base.value = '';
    exponent.value = '';
    resultPow.innerHTML = '';
    base.focus();
});

