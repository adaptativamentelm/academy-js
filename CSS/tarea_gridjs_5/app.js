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
 const change =()=>{
  if(butons.className=='one'){
    butons.style.background='black'
    butons.style.color='yellow'
  }
  if(butons.className=='two'){
    butons.style.background='greenyellow'
    butons.style.color='black'
  }
  if(butons.className=='three'){
    butons.style.background='white'
    butons.style.color='deeppink'
  }
 }


  butons.addEventListener('click',change); 
})



 


