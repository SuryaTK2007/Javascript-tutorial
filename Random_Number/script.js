const min=document.getElementById("min");
const max=document.getElementById("max");
const generate=document.getElementById("generate");
const result=document.getElementById("result");
const reset=document.getElementById("reset");

generate.addEventListener('click',(e)=>{
    e.preventDefault();
    let minVal=parseInt(min.value);
    let maxVal=parseInt(max.value);
    if(isNaN(minVal) || isNaN(maxVal) || minVal>=maxVal){
        result.textContent="Enter Valid Number";
        return;
    } 
    const rand=Math.floor(Math.random() * (maxVal-minVal+1)+minVal);
    result.textContent=`The random number is ${rand}`;
});

reset.addEventListener('click',()=>{
    result.textContent="";
});