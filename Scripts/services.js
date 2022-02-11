// Gaelen Rhoads
// 100804776
// 02/09/2022 

/**
 * Start function that calls other functions in this file
 */
function start()
{
    services();
}

// call start after the window loads
window.addEventListener("load", start, false);

/**
 * Sets text content for entire service page using Id selectors
 */
function services()
{
    // Design card
    let serviceCardTitle1 = "Design & Visualization";
    let serviceCardDesc1 = "When you hire me to design an online enviroment, I ensure that we visualize it before building it. This way, we can make changes easily and the whole process is quicker. Efficieny in the design process saves time and money for everyone involved. You can be sure that what we plan together will be made to your perfect specifications.";

    document.getElementById("serviceCardTitle1").innerHTML = serviceCardTitle1;
    document.getElementById("serviceCardDesc1").innerHTML = serviceCardDesc1;

    // Programming practices card
    let serviceCardTitle2 = "Best Programming Practices";
    let serviceCardDesc2 = "Whether I am programming with a team or on a solo project, I always ensure I follow the best industry practices. I learn new ways to make my code more efficient and readable as often as I can. Promoting best practices in coding ensures my websites run safely and smoothly.";

    document.getElementById("serviceCardTitle2").innerHTML = serviceCardTitle2;
    document.getElementById("serviceCardDesc2").innerHTML = serviceCardDesc2;

    // Mobile card
    let serviceCardTitle3 = "Mobile Compatibility";
    let serviceCardDesc3 = "Our world is evoling rapidly to where our daily lives depend on our mobile devices. That is why I make it a point to make sure my applications function on any device. I extensively test all screen sizes so my program will be shown in beautifully no matter what device it is on.";

    document.getElementById("serviceCardTitle3").innerHTML = serviceCardTitle3;
    document.getElementById("serviceCardDesc3").innerHTML = serviceCardDesc3;
}