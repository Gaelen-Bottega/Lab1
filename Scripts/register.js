// Gaelen Rhoads
// 100804776
// 02/23/2022 

/**
 * Class user of first name, last name, email and password.
 */
class User {
    constructor(firstName, lastName, email, password)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    toConsole(){
        return `${this.firstName} ${this.lastName}'s email is ${this.email} and has a password of ${this.password}`
    }
}
// Register section
$(document).ready(function () {
    // Hide error when user reaches page and assume there are no errors
    $('#ErrorMessage').hide();
    let firstNameError = true;
    let lastNameError = true;
    let emailError = true;
    let passwordError = true;
    let confirmPasswordError = true;
    // Everytime a person types, check for valid entry
    $('#inputFirstName').keyup(function () {
        validateFirstLastName();
    });
    $('#inputLastName').keyup(function () {
        validateFirstLastName();
    });
    $('#inputEmail').keyup(function () {
        validateEmail();
    });
    $('#inputPassword').keyup(function () {
        validatePassword();
    });
    $('#inputConfirmPassword').keyup(function () {
        validateConfirmPassword();
    });

    /**
     * This function validates the first and last name input boxes
     * @returns false if error
     */
    function validateFirstLastName() {
        let firstNameValue = $('#inputFirstName').val();
        let lastNameValue = $('#inputLastName').val();
        if(firstNameValue.length < 2 || lastNameValue.length < 2) {
            $('#ErrorMessage').show();
            $('#ErrorMessage').html
            ("<p>Length of first and last name must be over 2</p>");
            firstNameError = false;
            lastNameError = false;
            return false;
        }
        else {
            $('#ErrorMessage').hide();
        }
    }

    /**
     * Validates email
     * @returns false if error
     */
    function validateEmail()
    {
    const email =
    document.getElementById('inputEmail');
    email.addEventListener('blur', ()=>{
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let emailValue = email.value;
	if(regex.test(emailValue)){
        $('#ErrorMessage').hide();
		emailError = true;
        return true;
	}
    else if (emailValue.length < 8)
    {
        $('#ErrorMessage').show();
        $('#ErrorMessage').html
        ("<p>Email must be at least 8 characters</p>");
        emailError = false;
        return true;
    }
    else
    {
        $('#ErrorMessage').show();
        $('#ErrorMessage').html
        ("<p>Email must contain @ symbol and be a valid email.</p>");
        emailError = false;
        return false;
    }
	})
    }

    /**
     * This function validates the first and last name input boxes
     * @returns false if error
     */
     function validatePassword() {
        let passwordValue = $('#inputPassword').val();
        if(passwordValue.length < 6) {
            $('#ErrorMessage').show();
            $('#ErrorMessage').html
            ("<p>Password must be at least 6 characters</p>");
            passwordError = false;
            return false;
        }
        else {
            $('#ErrorMessage').hide();
        }
    }
    
    /**
     * This function validates the first and last name input boxes
     * @returns false if error
     */
     function validateConfirmPassword() {
        let passwordValue = $('#inputPassword').val();
        let passwordConfirmValue = $('#inputConfirmPassword').val();
        if(passwordValue != passwordConfirmValue) {
            $('#ErrorMessage').show();
            $('#ErrorMessage').html
            ("<p>Password and Confirm password must match!</p>");
            confirmPasswordError = false;
            return false;
        }
        else {
            $('#ErrorMessage').hide();
        }
    }

    /**
     * Stops the default action on the form
     * @param {submit} event 
     */
    var stopDefault = function(event) {
        event.preventDefault();
    };

    // Form
    var form = document.getElementById("register-form");

    // attach event listener
    form.addEventListener("submit", stopDefault, true);

    $('#submitButtonRegister').click(function () {
		validateFirstLastName();
		validatePassword();
		validateConfirmPassword();
		validateEmail();
		if ((firstNameError == true) &&
			(lastNameError == true) &&
            (passwordError == true) &&
			(confirmPasswordError == true) &&
			(emailError == true)) 
            {
                submitUserConsole();
                return true;
            } 
            else 
            {
			    return false;
            }
	});

});

/**
 * Submits a valid user to the console
 */
function submitUserConsole()
{
    let firstNameValue = $('#inputFirstName').val();
    let lastNameValue = $('#inputLastName').val();
    const email = document.getElementById('inputEmail');
	let emailValue = email.value;
    let passwordValue = $('#inputPassword').val();
    const user1 = new User(firstNameValue, lastNameValue, emailValue, passwordValue);
    let aUser = user1.toConsole();
    console.log(aUser);
}
 


 
    
    