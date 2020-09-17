let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=iA435kVAfBUEHbkCpcZrSiklgadN9LAUU3xz5Bvc';

let get_button = document.getElementById('btn');
let data = [];


const get_data = async () => {
    try {
        let response = await fetch(url);
        data = await response.json();
        console.log(typeof data);
        // console.log('data', data);
        print_data(data)

    } catch (e) {
        console.log(e);
    }
}
const print_data = (data) => {
    let all_photos = data.photos;
    for ( let i = 0 ; i < 5 ; i++ ){
        console.log(all_photos[i])
    };
};

get_button.addEventListener('click', get_data);