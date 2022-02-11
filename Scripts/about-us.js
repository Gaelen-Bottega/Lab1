// Gaelen Rhoads
// 100804776
// 02/09/2022 

/**
 * Start function that calls other functions in this file
 */
function start()
{
    aboutUs();
}

// call start after the window loads
window.addEventListener("load", start, false);

/**
 * Inserts text content into empty HTML divs
 */
function aboutUs()
{
    // Declarations for string literals for text content
    let aboutCardName = "Gaelen Rhoads";
    let aboutCardDesc = "Everyday, my goal is to learn something new and make someone smile. I am currently a second-year Computer Programming and Analysis Co-op student at Durham College. Much of my education has been remote, but this experience has made me focus on my goal even more. Communicating effectively and leaving a positive impression on people is more important than ever in this virtual environment.";
    let aboutCardButton = "Open Resume";

    // Find the div elements required by Id and set the HTML text to the string literals
    document.getElementById("aboutCardName").innerHTML = aboutCardName;
    document.getElementById("aboutCardDesc").innerHTML = aboutCardDesc;
    document.getElementById("aboutCardButton").innerHTML = aboutCardButton;
}