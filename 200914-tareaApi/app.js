let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=iA435kVAfBUEHbkCpcZrSiklgadN9LAUU3xz5Bvc';

let get_button = document.getElementById('btn');
let data = [];
let div = document.getElementById('show_data');

const get_data = async () => {
    try {
        let response = await fetch(url);
        data = await response.json();
        // console.log(typeof data);
        // console.log('data', data);
        print_data(data)
        

    } catch (e) {
        console.log(e);
    }
}

const print_data = (data) => {
    let all_photos = data.photos;
    for ( let i = 0 ; i < 600 ; i++ ){
        if (i == 100 || i == 150 || i == 300 || i == 350 || i == 550 ){
            // console.log(all_photos[i])
            print_on_html(all_photos[i].img_src);
            console.log(`photo ${i}`, all_photos[i].img_src);
        }
    };
};

const print_on_html = (x) => {
    let new_elem = document.createElement('img');
    new_elem.src = x;
    new_elem.width = 200;
    new_elem.height = 200;
    div.appendChild(new_elem);
} 

get_button.addEventListener('click', get_data);