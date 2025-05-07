const email=document.getElementById('email');
const enter=document.getElementById('enter');
const output=document.getElementById('output');
enter.addEventListener('click',(event)=>{
    event.preventDefault();
    let mail=email.value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(pattern.test(mail)){
        output.textContent="Email is Valid";
    }
    else{
        output.textContent="Email is not valid";
    }
});