// // Concatenacion por valor (objeto JSON)

// let obj = {
//     "dia": 'Buenos días',
//     "noche": 'Buenas noches'
// };

// let obj2 = { "tardes": 'Buenas tardes', ...obj };

// console.log('obj2', obj2);

// let obj3 = { "dia": obj.dia, "noche": obj.noche, "tardes": 'Buenas tardes' };

// console.log('obj3', obj3);

// //////////////////////////////////////////

// let arr = [
//     { "name": 'Luis' },
//     { "name": 'Andrea' },
//     { "name": 'Scar' },
//     { "name": 'Igor' }
// ];

// let newArr1 = arr.map((el) => ({ "name": el.name, "company": 'Adaptativamente' }));

// let newArr2 = arr.map((el) => ({ ...el, "company": 'Adaptativamente' }));
// // let newArr = arr.map((el) => { return { ...el, "company": 'Adaptativamente' } });

// console.log('newArr', newArr2);

///////////////////////////////////

// Concatenacion por valor (arreglo)

// let arreglo = [];
// let arreglo2 = [...arreglo, 6, 7, 8, 9, 10];
// console.log('arreglo2 ->', arreglo2);
// let arreglo3 = [arreglo, 6, 7, 8, 9, 10];
// console.log('arreglo3 ->', arreglo3);

//////////////////////////////////////////

// let person = {
//     "name": 'Luis',
//     "lastName": 'Miranda',
//     "isGirl": false,
//     "greet": function () {
//         console.log(`Hola mi nombre es ${this.name} ${this.lastName} y ${this.isGirl ? 'soy' : 'no soy'} una niña`);
//         // return `Hola mi nombre es ${this.name} ${this.lastName} y ${this.isGirl ? 'soy' : 'no soy'} una niña`;
//     }
// };

// console.log('person', person.name);
// console.log('person', person.lastName);
// console.log('person', person.isGirl);
// person.greet();
// // console.log('person', person.greet());
