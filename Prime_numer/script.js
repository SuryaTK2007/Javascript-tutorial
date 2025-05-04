function isPrime(n){
    if(n<2) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    let limit=Math.sqrt(n);
    for(let i=3; i<=limit; i++){
        if(n%i==0) return false;
    }
    return true;
}
document.addEventListener('DOMContentLoaded', ()=>{
    const input=document.getElementById('numInput');
    const check=document.getElementById('checkBtn');
    const result=document.getElementById('result');
    check.addEventListener('click',()=>{
        const value=parseInt(input.value, 10);
        if(isNaN(value)){
            result.textContent="Enter a number";
            return;
        }
        if(isPrime(value)){
            result.textContent="It is a prime number";
            return;
        }
        else{
            result.textContent="It is not a prime number";
        }
    });
});