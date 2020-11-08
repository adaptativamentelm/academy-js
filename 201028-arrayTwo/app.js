

let url0 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/1';
let url1 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/2';
let url2 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/3';
let url3 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/4';
let url4 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/5';
let url5 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/6';
let url6 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/7';
let url7 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/8';
let url8 ='https://portal-be.adaptativamente.cl/reporteria/academy/get-user/id/9';



let qty = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getData = async () => {

  try {
      const response = await fetch(url0);
      let data0 = await response.json();
      
      const response1 = await fetch(url1);
      let data1 = await response1.json();
     
      const response2 = await fetch(url2);
      let data2 = await response2.json();
     
      const response3 = await fetch(url3);
      let data3 = await response3.json();
     
      const response4 = await fetch(url4);
      let data4 = await response4.json();
      
      const response5 = await fetch(url5);
      let data5 = await response5.json();
      
      const response6 = await fetch(url6);
      let data6 = await response6.json();
     
      const response7 = await fetch(url7);
      let data7 = await response7.json();
      
      const response8 = await fetch(url8);
      let data8 = await response8.json();

     //concatemno los get
      let data=data0.concat(data1,data2,data3,data4,data5,data6,data7,data8)
      console.log('data con todos los ids', data)
      //genero un arreglo solo con los nombres
      let dataNames =data.map((data) => data.name)
      console.log(dataNames)
      //junto los elementos con el espacio y guion
      let dataPrint=dataNames.join(' - ') 
      console.log(dataPrint)
   
   // imprimir arreglo en pantalla con evenlistener

  } catch (e) {
      console.log(e);
  }

}
getData();



