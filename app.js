const male=document.querySelector(".male");
const Female=document.querySelector(".Female");
const btn=document.querySelector(".btn");
const loveans=document.querySelector(".love");

let love="";
let m="";
let f="";


male.addEventListener('change',(e)=>{
    value=e.target.value;
     m=value
})
Female.addEventListener('change',(e)=>{
    value=e.target.value;
     f=value
})

btn.addEventListener('click',()=>{
     love=Math.floor(Math.random()*100);
     if(love<80)
      love+=20;

     loveans.textContent=`${m} loves ${f} about ${love}%`;

})

