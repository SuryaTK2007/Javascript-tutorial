function generate(){
    const len=parseInt(document.getElementById("len").value);
    const upper=document.getElementById("upper").checked;
    const symbol=document.getElementById("symbol").checked;
    const number=document.getElementById("number").checked;
    const password=genpass(len,upper,symbol,number);
    document.getElementById("pass").textContent=password;
}
function genpass(len,upper,symbol,number){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    let chars=lower;
    if(upper) chars+=upperChars;
    if(number) chars+=numChars;
    if(symbol) chars+=specialChars;
    let pass="";
    for(let i=0; i<len; i++){
        let randInd=Math.floor(Math.random()*chars.length);
        pass+=chars[randInd];
    }
    return pass;
}
function reset(){
    document.getElementById("len").value = 12;
    document.getElementById("upper").checked = true;
    document.getElementById("number").checked = true;
    document.getElementById("symbol").checked = true;
    document.getElementById("pass").textContent="";
}