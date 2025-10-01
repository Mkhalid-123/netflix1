

let c=document.querySelector("#icon1");
let c1=document.querySelector("#s2");
let icon=document.querySelector(".A");
let icon1=document.querySelector(".A1");
let icon2=document.querySelector(".A2");let icon3=document.querySelector(".A3");
let icon4=document.querySelector(".A4");
let icon5=document.querySelector(".A5");
let sec=document.querySelector("#w1");
let sec1=document.querySelector("#w2");
let sec2=document.querySelector("#w3");
let sec3=document.querySelector("#w4");
let sec4=document.querySelector("#w5");
let sec5=document.querySelector("#w6");
let check=1;

 c.addEventListener("click" , function(){
    c3.style.transform="translatex(400px)";
     c2.style.visibility="visible";
     c.style.visibility="hidden";
})

let c2=document.querySelector("#icon2");
let c3=document.querySelector("#s2");
c2.addEventListener("click" , function(){
    c3.style.transform="translatex(-400px)";
     c.style.visibility="visible";
     c2.style.visibility="hidden";

})
icon.addEventListener("click", function(){
   if(check===1){
    sec.style.display="block";
    sec1.style.display="none";
    sec2.style.display="none";
    sec3.style.display="none";
    sec4.style.display="none";
    sec5.style.display="none";
    check=0;
   }else{
       sec.style.display="none";
    check=1;
   }
   
})
let check1=1;
icon1.addEventListener("click", function(){
   if(check1===1){
    sec1.style.display="block";
     sec.style.display="none";
    sec2.style.display="none";
    sec3.style.display="none";
    sec4.style.display="none";
    sec5.style.display="none";
    check1=0;
   }else{
       sec1.style.display="none";
    check1=1;
   }
   
})

let check2=1;

icon2.addEventListener("click", function(){
if(check2===1){
    sec2.style.display="block";
     sec1.style.display="none";
    sec.style.display="none";
    sec3.style.display="none";
    sec4.style.display="none";
    sec5.style.display="none";
    check2=0;
   }else{
       sec2.style.display="none";
    check2=1;
   }
})

let check3=1;

icon3.addEventListener("click", function(){
  if(check3===1){
    sec3.style.display="block";
     sec1.style.display="none";
    sec2.style.display="none";
    sec.style.display="none";
    sec4.style.display="none";
    sec5.style.display="none";
    check3=0;
   }else{
       sec3.style.display="none";
    check3=1;
   }
})


let check4=1;
icon4.addEventListener("click", function(){
if(check4===1){
    sec4.style.display="block";
     sec1.style.display="none";
    sec2.style.display="none";
    sec3.style.display="none";
    sec.style.display="none";
    sec5.style.display="none";
    check4=0;
   }else{
       sec4.style.display="none";
    check4=1;
   }
})

let check5=1;
icon5.addEventListener("click", function(){
   if(check5===1){
    sec5.style.display="block";
    sec1.style.display="none";
    sec2.style.display="none";
    sec3.style.display="none";
    sec4.style.display="none";
    sec.style.display="none";
    check5=0;
   }else{
       sec5.style.display="none";
    check5=1;
   }
})