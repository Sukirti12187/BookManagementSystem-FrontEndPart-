
function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
     var pass=document.getElementById("pass").value;
     var confpass=document.getElementById("confirmpass").value;
     var min=6;
     var max=12;
     var errorname=erroremail=errorcpass=errorpass=true;
     if(name==""){
       document.getElementById('errorname').innerHTML="*enter the name";
       return false;
     }
     if(email==""){
      document.getElementById('erroremail').innerHTML="*enter the email";
       return false;
     }
     if(pass!=confpass){
       document.getElementById('errorcpass').innerHTML="*enter the same password";
      
       return false;
     }
     if(pass.length>=min && pass.length<=max){
       alert("registration completed")
       return true;
     }
     else{
       document.getElementById('errorpass').innerHTML="*please enter password between "+min+" and "+max;
       return false;
     }
     
     
   }
  