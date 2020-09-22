let get = 'https://portal-be.adaptativamente.cl/reporteria/academy/users';
let post = 'https://portal-be.adaptativamente.cl/reporteria/academy/user/id';

let show = document.getElementById('show');
let pairs = document.getElementById('pairs');
let odd = document.getElementById('odd');

const getUrl = async () => {
    try {
        let response = await fetch(get);
        // console.log(response);
        data = await response.json();
        // console.log(data);
        traveling(data); 
    } catch (e) {
        console.log(e);
    }
};

const traveling = (n) =>{    
    for( let i = 0; i<n.length; i++) {
        // console.log(n[i].id)
        if (n[i].id %2 == 0) {
            pairs.innerHTML += `<p>${n[i].name}</p>`;            
        } else {
            odd.innerHTML += `<p>${n[i].name}</p>`
        }
    }
};

show.addEventListener('click', getUrl);