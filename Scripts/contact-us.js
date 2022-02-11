function start()
{
    contactUs();
    document.getElementById("submitButton").addEventListener("click", redirect, false);
}

// call start after the window loads
window.addEventListener("load", start, false);

function contactUs()
{
    
}

function sumbitConsole()
{
    var name = document.getElementById("inputName");
    console.log(name.value);
    var email = document.getElementById("inputEmail");
    console.log(email.value);
    var number = document.getElementById("inputNumber");
    console.log(number.value);
    var message = document.getElementById("inputMessage");
    console.log(message.value);
}

function redirect()
{
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
}
