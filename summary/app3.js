// let andre = "andreita";
// let space =" ";
// document.write(andre);
// var pe = document.createElement("p");
// pe.title = "titulo";
// pe.innerHTML = "texto";
// document.getElementsByTagName("body")[0].appendChild(pe);
//___________________________________________


// setTimeout(() => {
//   console.log("ddddd")  
// }, 2000);

// function myFunction() {
//     console.log('hola bebe2');
// }

// let radiobut = document.getElementById("1");
// radiobut.onchange = function(){
//     console.log('saludo');
// }

// radiobut.addEventListener("change", myFunction);

// _____________________________
let arr = []
let arr_word = ['a']
let arr_words = ['a','b','c','d','e']
let arr_arr_words = [['a','b','c','d'],['e','f','g','h'],['h','i','j','k']]
let arr_numbers = [1,2,3,4,5,6,7,8,9]
let arr_numbers_8 = [1,2,3,4,5,6,7,8,9]
let arr_numbers_10 = [10,10,10,5,7,10,10]
let arr_arr_numbers = [[1,2,3],[4,5,6],[7,8,9]]
let arr_num_3 = [1,2,3] 

//__________________________________________________________
// Array.from()
// console.log('1. from:', arr_words.from());
// ???
//__________________________________________________________
// Array.isArray()
console.log('2. isArray:', Array.isArray(arr_numbers));
//__________________________________________________________
// Array.of()
console.log('3. of:', Array.of(arr_numbers));
//__________________________________________________________
// Array.prototype.concat()
console.log('4. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// Array.prototype.copyWithin() -> REESCRIBE EN 0, VALOR DESDE POSICION 3 HASTA LA 5 ?
console.log('5. copyWithin:', arr_numbers.copyWithin(0,3,5));
//__________________________________________________________
// Array.prototype.entries()
// console.log('6. entries:', arr_words.entries(arr_numbers));
//__________________________________________________________ 
// Array.prototype.every()
const bajo10 = (x) => x < 10;
console.log('7. every-todosBajo10:', arr_numbers.every(bajo10));
// true (si todos, son bajo 10)
const bajo8 = (y) => y < 8;
console.log('7. every-todosBajo8:', arr_numbers.every(bajo8));
//false (no, no todos son bajo 8)
//__________________________________________________________
// // Array.prototype.fill()
console.log('8. fill:', arr_numbers_8.fill(10,5));
// [1,2,3,4,5,10,10,10,10]
console.log('8. fill:', arr_numbers_8.fill(10,5,7)); //no funciona!
//__________________________________________________________
// // Array.prototype.filter()
console.log('9. filter:', arr_numbers_10.filter(x => x == 10)); 
// [10,10,10,10,10]
//__________________________________________________________
// // Array.prototype.find()
// primer elemento que cumpla condicion 
console.log('10. find:', arr_numbers.find(x => x < '5'));
// 4
console.log('10. find:', arr_numbers.find(x => x > '5'));
// 6
console.log('10. find:', arr_numbers_10.find(x => x < '6'));
// 5
console.log('10. find:', arr_numbers_10.find(x => x > '6'));
// 10 ???
//__________________________________________________________
// // Array.prototype.findIndex()
console.log('11. findIndex:', arr_numbers_10.findIndex(x=>x<10));
// devuelve posicion del primero que cumple 
//__________________________________________________________
// // Array.prototype.flat()
console.log('12. flat:', arr_arr_words.flat());
// aplana
//__________________________________________________________
// // Array.prototype.flatMap()
console.log('13. flatMap:', arr_arr_numbers.flatMap(x => x));
//aplana (diferencia con flat?)
//__________________________________________________________
// // Array.prototype.forEach()
console.log('14. forEach:', arr_numbers.forEach((x) => x + 1));
//undefined ????
//__________________________________________________________
// // Array.prototype.includes()
console.log('15. includes:', arr_numbers_8.includes(2));
//true
//__________________________________________________________
// // Array.prototype.indexOf()
console.log('16. indexOf:', arr_numbers_8.indexOf(4));
// 3
//__________________________________________________________
// // Array.prototype.join()
console.log('17. join:', arr_num_3.join(arr_word));
//combina el primero con el segundo 1a2a3a
//__________________________________________________________
// // Array.prototype.keys()
// console.log('18. keys:', ... .keys(...));
// falta crear arreglos
//__________________________________________________________
// // Array.prototype.lastIndexOf()
// console.log('19. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.map()
// console.log('20. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.pop()
// console.log('21. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.push()
console.log('22. push:', arr.push('z','y'));
// 2 , retorna cantidad final de elementos
let arr_2 = arr.push('z','y');
console.log('22. push', arr);
// console.log('22. push:', arr_words.push(x=>x));
// 5 con x => x ???
//__________________________________________________________
// // Array.prototype.reduce()
// console.log('23. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.reduceRight()
// console.log('24. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.reverse()
console.log('25. reverse:', arr_words.reverse());
//__________________________________________________________
// // Array.prototype.shift()
// console.log('26. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.slice()
// console.log('27. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.some()
// console.log('28. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.sort()
console.log('29. sort:', arr_numbers_10.sort());
// como ordena ???
//__________________________________________________________
// // Array.prototype.splice()
// console.log('30. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.toLocaleString()
// console.log('31. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.toSource()
// console.log('32. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.toString()
console.log('33. toString:', arr_numbers.toString());
// convierte a string
//__________________________________________________________
// // Array.prototype.unshift()
// console.log('34. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype.values()
// console.log('35. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // Array.prototype[@@iterator]()
// console.log('36. concat:', arr_words.concat(arr_numbers));
//__________________________________________________________
// // get Array[@@species]
// console.log('37. concat:', arr_words.concat(arr_numbers));