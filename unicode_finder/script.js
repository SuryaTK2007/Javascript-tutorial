const input=document.getElementById("value");
const enter=document.getElementById("enter");
const result=document.getElementById("result");
enter.addEventListener('click',(e)=>{
    e.preventDefault();
    let val=input.value;
    if(val.length===0){
        result.textContent="Please enter the character";
        return;
    }
    const codePoint=val.codePointAt(0);
    result.textContent=`The Unicode of '${val}' is U+${codePoint.toString(16).toUpperCase()}`;
});