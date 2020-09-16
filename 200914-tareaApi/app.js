const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=iA435kVAfBUEHbkCpcZrSiklgadN9LAUU3xz5Bvc';
let send = document.getElementById('click');
let div = document.getElementById('container');

const func2 = async () => {

    try {
        // GET ASYNC AWAIT
        let response = await fetch(url);
        let data = await response.json();
        for (let i = 0; i < 5; i++) {
            let img_url = data.photos[i].img_src;
            createImg(img_url);  
        }
        console.log('data', data);
    } catch (e) {
        console.log(e);
    }

}

function createImg(url) {
    let newImg = document.createElement('img');
    newImg.style.maxWidth = '10em';
    newImg.style.padding = '1em';
    newImg.src = url;
    div.appendChild(newImg); 
    
}
send.addEventListener('click', func2);