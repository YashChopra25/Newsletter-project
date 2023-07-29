var card1=document.getElementById("card-1");
var card2=document.getElementById("card-2");
var btn=document.getElementById("btn");
var email=document.getElementById("Email");
var span=document.getElementById("span");
var emailrcd=document.getElementById("emailrcvd");
   removemerrror=()=>{
      email.classList.remove("error");
      span.style.display="none";
   }


btn.addEventListener("click",()=>{
   removemerrror();
   var emailVal=document.getElementById("Email").value;
   if((emailVal.trim()=="") || (emailVal.indexOf("@")<0)  ||(emailVal.indexOf(".")<0 ) || (emailVal.charAt(emailVal.indexOf("@")+1)==".")   ||(emailVal.length-2<emailVal.indexOf(".") ))
      {
         email.classList.add("error");
         span.style.display="block";
      }
      else{
         card1.style.display="none";
         card2.classList.remove("hide");
         emailrcd.innerHTML=emailVal;
      }
})