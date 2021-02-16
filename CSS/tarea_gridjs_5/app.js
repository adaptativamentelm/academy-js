const div= document.querySelector('.container')
let classButton=[{class:'one',text:'boton 1'},

{class:'one',text:'boton 1'},
{class:'one',text:'boton 1'},
{class:'two',text:'boton 2'},
{class:'two',text:'boton 2'},
{class:'two',text:'boton 2'},
{class:'three',text:'boton 3'},
{class:'three',text:'boton 3'},
{class:'three',text:'boton 3'}
]

classButton.forEach(e=>{
  let butons=document.createElement('button');
   
  butons.innerHTML=`${e.text}`;
  butons.className=`${e.class}`;
  div.appendChild(butons)
  console.log(butons)
/* const change=(b, class)=>{
  if(b.class=='one'){
  
  }
  }
  butons.addEventListener('click',change); */
})



 


