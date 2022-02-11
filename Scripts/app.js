function start()
{
    homepage();
    aboutUs();
}

// call start after the window loads
window.addEventListener("load", start, false);

function homepage()
{
    let homepageTitle = "Welcome";
    document.getElementById("homepage-title").innerHTML = homepageTitle;
}

// About us page 
window.onload = function aboutUs()
{
    let aboutCardName = "Gaelen Rhoads";

    document.getElementById("aboutCardName").innerHTML = aboutCardName;

    let aboutCardDesc = "My goal every day is to learn something new and make someone smile. I am currently a second-year Computer Programming and Analysis Co-op student at Durham College. Much of my education has been remote, but this experience has made me focus on my goal even more. Communicating effectively and leaving a positive impression on people is more important than ever in this virtual environment.";

    document.getElementById("aboutCardDesc").innerHTML = aboutCardDesc;

    let aboutCardButton = "Open Resume";

    document.getElementById("aboutCardButton").innerHTML = aboutCardButton;
}

