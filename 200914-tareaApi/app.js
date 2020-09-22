let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=iA435kVAfBUEHbkCpcZrSiklgadN9LAUU3xz5Bvc';
<<<<<<< HEAD
let get = document.getElementById('get');
let root = document.getElementById('root');

const func = async () =>{
   let response = await fetch(url);
//    console.log(response);
   let data = await response.json();
//    console.log('dataaaaaaaaaaa', data.photos);
   let info = data.photos
//    console.log(info);
   for (let i = 0; i < 5; i++) {
       if( info[i].img_src){
      // console.log('datitaaaa', info[i].img_src)
      let images = info[i].img_src
      root.innerHTML += `<div><img src="${images}" alt="foto" class="photo"></div>`
       }
   };
    };
 
get.addEventListener('click', func);
=======
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
>>>>>>> 1af16f41ef22f110723e2429ddc930dc1fd81af5
