const getUrl = 'https://portal-be.adaptativamente.cl/reporteria/academy/users-list';
let data = [];
let input = document.getElementById('input-filter');
let all_view = document.getElementById('all-view');

// todos usuarios
const getData = async () => {
    let response = 
    await fetch(getUrl);
    data = await response.json();
};

const coincidencer = () => {
    let the_coincidence = (input.value).toLowerCase();
    // console.log(the_coincidence); 
    let filter_data = data.filter((data) => (data.name.toLowerCase()).includes(the_coincidence));
    console.log(filter_data);
    
    filter_data.forEach( data => { // imprime por cada coincidencia
        let p = document.createElement('p');
        p.innerHTML = data.name;
        all_view.appendChild(p);
        
    });
    
    
    
    
    
    
    
    
}

input.addEventListener('keyup', coincidencer);
getData();
