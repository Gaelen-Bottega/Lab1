// Gaelen Rhoads
// 100804776
// 02/09/2022 

/**
 * Start function that calls homepage function in this file
 */
function start()
{
    homepage();
}

// call start after the window loads
window.addEventListener("load", start, false);

/**
 * Sets title text on homepage
 */
function homepage()
{
    // Set welcome message equal to string literal and finds div to put it in with the Id
    let homepageTitle = "Welcome";
    document.getElementById("homepage-title").innerHTML = homepageTitle;
}