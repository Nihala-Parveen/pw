var nameError=document.getElementById('name-error')
var lnameError=document.getElementById('lname-error');
var emailError=document.getElementById('email-error');
var phoneError=document.getElementById('phone-error');
var msgError=document.getElementById('msg-error')

function validateName(){
    var name=document.getElementById('first-name').value;
    if(name.length == 0){
        nameError.innerHTML="Name is required";
        return false;
    }
    else if(!name.match(/^[A-Za-z]+$/)){
        nameError.innerHTML="Invalid Name";
        return false;
    }
    else if(name.match(/^[A-Za-z]+$/)){
        nameError.innerHTML = 'Valid';
        return true;
    }
}
function validatelName(){
    var lname=document.getElementById('last-name').value;
    if(lname.length==0){
        lnameError.innerHTML="Name is required";
        return false;
    }
    else if(NaN){
        lnameError.innerHTML="Invalid"
    }
    else if(!lname.match(/^[A-Za-z]+$/)){
        lnameError.textContent="Invalid Name";
        return false;
    }
    else if(lname.match(/^[A-Za-z]+$/)) {
        lnameError.innerHTML='valid';
        return true;
    }
}
function validateEmail(){
    var email=document.getElementById('e-mail').value;
    if(email.length==0){
        emailError.innerHTML="Email is required";
        return false;
    }
    else if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML="Invalid Email";
        return false;
    }
    else{
        emailError.innerHTML='valid';
        return true;
    }
}
function validatePhone(){
    var Phone=document.getElementById('phone').value;
    if(Phone.length==0){
        phoneError.innerHTML="No is required";
        return false;
    }
    else if(!Phone.match(/^[6789]\d{9}$/)){
        phoneError.innerHTML="Invalid No";
        return false;
    }
    else if(Phone.match(/^[6789]\d{9}$/)){
        phoneError.innerHTML='valid';
        return true;
    }
}
function validateMsg(){
    var msg=document.getElementById('msg').value;
    if(msg.length == 0){
        msgError.innerHTML="Message is required";
        return false;
    }
    else{
        msgError.innerHTML = 'Valid';
        return true;
    }
}