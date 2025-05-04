const value=document.getElementById("passes");
const result=document.getElementById("symbol");
symbol.addEventListener('click',()=>{
    if(value.type=="password"){
        value.type="text";
        result.textContent="hide";
    }
    else{
        value.type="password";
        result.textContent="show";
    }
});