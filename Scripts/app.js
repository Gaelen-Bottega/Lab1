function start()
{
    homepage();
}

// call start after the window loads
window.addEventListener("load", start, false);

// Homepage
function homepage()
{
    let homepageTitle = "Welcome";
    document.getElementById("homepage-title").innerHTML = homepageTitle;
}



