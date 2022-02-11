// Gaelen Rhoads
// 100804776
// 02/09/2022 

/**
 * Start function listens for a click on the form submit button
 */
function start()
{
    document.getElementById("submitButton").addEventListener("click", redirect, false);
}

// call start after the window loads
window.addEventListener("load", start, false);

/**
 * Logs user input into form into the inspect element console
 */
function sumbitConsole()
{
    // Declare variable for each input field and log its value to the console
    var name = document.getElementById("inputName");
    console.log(name.value);
    var email = document.getElementById("inputEmail");
    console.log(email.value);
    var number = document.getElementById("inputNumber");
    console.log(number.value);
    var message = document.getElementById("inputMessage");
    console.log(message.value);
}

/**
 * Redirects user to the homepage after 3 seconds after form is submitted
 */
function redirect()
{
    // Use of setTimeout and anonymous function to delay redirect for 3000 milliseconds
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
}
