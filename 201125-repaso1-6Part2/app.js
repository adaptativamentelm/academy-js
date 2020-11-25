let main1 = document.getElementsByTagName('main')[0];

let createElements = (aqui) => {
    let elementoDiv = document.createElement("div");
    let elementP = document.createElement('p');
    elementP.innerHTML = aqui;
    elementoDiv.appendChild(elementP);
    main1.appendChild(elementoDiv);
};

// const createElements2 = () => {
//     main1.innerHTML = 
//     `<div>
//         <p>Holabb</p>
//     </div>`;
// };


for (let x = 1; x <= 200; x++) {
    let got = `got${x}`;
    createElements(got);
}

