 function validation(){
        var x=document.getElementById("date").value;
        var y=new Date();
        var title=document.getElementById('title').value
        var author=document.getElementById('author').value;
        var price=document.getElementById('price').value;
        if(title==''){
            document.getElementById('errortitle').innerHTML=("*please enter title");
                return false;
        }
        if(author==''){
            document.getElementById('errorauthor').innerHTML=("*please enter author");
                return false;
        }
        if(price==0){
            document.getElementById('errorprice').innerHTML=("*please enter price");
                return false;
        }
        if(new Date(x).toDateString()==y.toDateString()){
            return true;
        }else{
            document.getElementById('errordate').innerHTML=("*please enter date");
            return false;
        }
    }
         