let user = 'Andreita';

localStorage.setItem('user', user);

let user2 = {
    "name": 'Andrea',
    "cabello": 'Castaño',
    "beautiful": true,
    "eyes": 'brown'
};

localStorage.setItem('user2', JSON.stringify(user2));
let resultado2 = JSON.parse(localStorage.getItem('user2'));

console.log('resultado2', resultado2);

// let window = {
//     "JSON": {
//         "parse": function () {},
//         "stringify": function () {}
//     },
//     "localStorage": {
//         "length": 10,
//         "getItem": function () {},
//         "setItem": function () {},
//     },
//     "fetch": function () { return Response },
//     "Response": {
//         "json": function () {},
//         "status": 200,
//         "message": 'Holabebe'
//     },
//     "setTimeout": function () {},
//     "location": {
//         "href": 'file:///C:/Users/miran/Adaptativamente/Academy/academy-js/summary/index.html',
//         "replace": function () {},
//         "reload": function () {}
//     },
//     "document": {
//         "URL": 'file:///C:/Users/miran/Adaptativamente/Academy/academy-js/summary/index.html',
//         "getElementById": function () { return HTMLElement },
//         "createElement": function () {},
//     }
// };
