const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

form.addEventListener("submit", onsubmitfunction);

function onsubmitfunction(event)
{
    if(email.value === "" || password.value === "")
    {
        event.preventDefault();
        alert("Please Fill The Empty Fields..");
        return false;
    }
    else
    {
        if(email.value === "admin@test.com" && password.value === "12345")
        {
            return true;
        }
        else
        {
            event.preventDefault();
            alert("Invalid Credentials..!");
            return false;
        }
    }
}