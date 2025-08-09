function validateName(name){
    const regex= /^[A-Za-z\s]+$/;
    if(name.trim()===""){
        return "Name cannot be Empty!!";
    }
    if(!regex.test(name)){
        return "Name can only contains letters and spaces!!";
    }
    return "Name is valid!!";
}

function validateEmail(email){
    const regex= /^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;
    if(email.trim()===""){
        return "Email cannot be Empty!!";
    }
    if(!regex.test(email)){
        return "Invalid Email Format!!";
    }
    return "Email is valid!!";
}

function validatePassword(password){
    const regex= /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim()===""){
        return "Password cannot be Empty!!";
    }
    if(!regex.test(password)){
        return "Password must be atleast 8 characters long, contain an uppercase letter, and a number!!";
    }
    return "Password is valid!!";
}

function validatePhone(phone){
    const regex= /^[0-9]{10}$/;   
    if(phone.trim()===""){
        return "Phone Number cannot be Empty!!";
    }
    if(!regex.test(phone)){
        return "Phone Number must be 10 digits long!!";
    }
    return "Phone Number is valid!!";
}

function validateForm(){
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const phone= document.getElementById("phone").value;

    const nameError= validateName(name);
    const emailError= validateEmail(email);
    const passwordError= validatePassword(password);
    const phoneError= validatePhone(phone);

    if(nameError === "Name is valid!!" && emailError === "Email is valid!!" && passwordError === "Password is valid!!" && 
        phoneError === "Phone Number is valid!!"){
            return true;
    }

    document.getElementById("nameError").innerText= nameError === "Name is valid!!" ? "":nameError;
    document.getElementById("emailError").innerText= emailError === "Email is valid!!" ? "":emailError;
    document.getElementById("passwordError").innerText= passwordError === "Password is valid!!" ? "":pasa;
    document.getElementById("phoneError").innerText= phoneError === "Phone Number is valid!!" ? "":phoneError;
    return false;
}