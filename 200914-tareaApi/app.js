let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=iA435kVAfBUEHbkCpcZrSiklgadN9LAUU3xz5Bvc';
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
