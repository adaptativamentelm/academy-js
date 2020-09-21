let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=iA435kVAfBUEHbkCpcZrSiklgadN9LAUU3xz5Bvc';
let data = [];
let cant = 5;
let button = document.getElementById('get');
let result = document.getElementById('result');

const getData = async () => {
    try {
        cleanResult();
        let response = await fetch(url);
        data = await response.json();
        // console.log('data', data);
        processing();
    } catch (e) {
        console.log(e);
    }
};

const processing = () => {
    for (let x = 0; x < cant; x++) {
        console.log('data', data.photos[x]);
        drawing(data.photos[x].img_src);
    }
};

const drawing = (src) => {
    let img = document.createElement('img');
    img.width = 400;
    img.height = 400;
    img.src = src;
    result.appendChild(img);
};

const cleanResult = () => {
    let imgs = document.getElementsByTagName('img');
    for (let x = imgs.length - 1; x >= 0; x--) {
        imgs[x].remove();
    }
};

button.addEventListener('click', getData);