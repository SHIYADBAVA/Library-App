
const form = document.querySelector("form");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", onsubmitfunction);

function onsubmitfunction(event)
{
    if(password.value != password2.value)
    {
        console.log(password,password2);
        event.preventDefault();
        alert("Passwords are not matching..!");
        return false;    
    }
    else
    {
        return true;
    }
}