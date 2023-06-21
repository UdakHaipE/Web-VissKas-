function myFunction(){
    var Nname = document.forms["Myform"]["Nname"].value;
    var pw = document.forms["Myform"]["Pass"].value;
   
    if(Nname=="Admin" && pw=="UlvisOzolins"){
       window.location.href="/VissKas/index.html";
    }else{
        document.querySelector('.alert-box').style.display = 'flex';
    }
}
 
