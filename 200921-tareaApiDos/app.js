let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';
let run = document.getElementById('run')
let data;
let counter = 8;
let unpair = document.getElementById('unpair');
let pair = document.getElementById('pair');

const getData = async () => {
    try{
        let request1 = await fetch(get);
        data = await request1.json();
        // console.log (data);
        processing(data);
    } catch (e) {
        console.log(e);
    }
} 

const processing = (all_data) => {
    for (let i=0 ; i < counter ; i++) {
        // console.log(all_data[i])
        
        if ( all_data[i].id % 2 == 0 ){
            console.log('par', all_data[i].name)
            print_pair(all_data[i].name);
        } else {
            console.log('impar', all_data[i].name)
            print_unpair(all_data[i].name)       
        }
    }   
}

const print_pair = (got_pair) => {
    let paragraph_pair = document.createElement('p');
    paragraph_pair.innerHTML = got_pair;
    pair.appendChild(paragraph_pair);
}

const print_unpair = (got_unpair) => {
    let paragraph_unpair = document.createElement('p');
    paragraph_unpair.innerHTML = got_unpair;
    unpair.appendChild(paragraph_unpair);

}



//imprimir

run.addEventListener('click', getData);