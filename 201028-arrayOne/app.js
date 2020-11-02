const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let data = [];
let input = document.getElementById('input-filter');
let all_view = document.getElementById('all-view');

// todos usuarios
const getData = async () => {
    let response = await fetch(getUrl);
    data = await response.json();
};

const coincidencer = () => {
    let the_coincidence = (input.value).toLowerCase();
    // console.log(the_coincidence); 
    let filter_data = data.filter((data) => (data.name.toLowerCase()).includes(the_coincidence));
    // console.log(filter_data);
    print_data(filter_data);
}

const print_data = (filtered_data) => {
    console.log(filtered_data);
    
    filtered_data.forEach( data => {
    });
    
    // esta cuesiton esta mala :v
    if (filtered_data) {
        let p = document.createElement('p');
        p.innerHTML = data.name;
        all_view.appendChild(p);
    }
    
    
}

input.addEventListener('keyup', coincidencer);
getData();
