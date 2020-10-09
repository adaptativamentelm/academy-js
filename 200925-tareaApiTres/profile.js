
let redirectPge = document.getElementById('redirectPage');
let dataPost = [];
const catchId = (id) => {
    console.log(id);
    const payload = {
        "method": 'POST',
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({ "id": id })
    };
    getDataPost(userByIdUrl, payload, id);
};
const getDataPost = async (url, payload, id) => {
    try{
        const response = await fetch(url, payload);
        console.log('url',url);
        console.log('payload',payload);
        console.log('id',id);
        dataPost = await response.json();
        console.log('dataPost', dataPost);
        let h2 = document.createElement('h2');
        h2.innerHTML = id;
        redirectPage.appendChild(h2);
    }catch(error){
        console.log(error);
    }
    
    
};