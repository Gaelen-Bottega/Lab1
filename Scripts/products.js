// Gaelen Rhoads
// 100804776
// 02/09/2022 

/**
 * Start function that calls other functions in this file
 */
function start()
{
    products();
}

// call start after the window loads
window.addEventListener("load", start, false);

/**
 * Sets the content text for all three cards on this page
 */
function products()
{
    // Card 1 COBOL coding
    let projectCardTitle1 = "COBOL Mainframe Coding";
    let projectCardDesc1 = "Recently I was tasked with building an application that formatted and did calculations on an input file. My program had to take this data and output the results in a professional report. I loved this project because I love COBOL. The structure and simplicity is amazing for programming functionality like sorting an input file.";

    document.getElementById("projectCardTitle1").innerHTML = projectCardTitle1;
    document.getElementById("projectCardDesc1").innerHTML = projectCardDesc1;

    // C# Application card
    let projectCardTitle2 = "Multi-form application in C#";
    let projectCardDesc2 = "Late last semester, I was part of a group that made a multi-window application that had a lot of functionality. It was a text editor, whiteboard, sales tax calculator and a car list. We programmed the functionality to switch between windows and utilize every application seamlessly. C# is one of my favorite languages because of all the things it can do.";

    document.getElementById("projectCardTitle2").innerHTML = projectCardTitle2;
    document.getElementById("projectCardDesc2").innerHTML = projectCardDesc2;

    // SDLC card
    let projectCardTitle3 = "Working with the SDLC";
    let projectCardDesc3 = "This project was not so much programming but the methodology and planning behind a project. Last year my team and I were given a problem and we had to design a software soloution. We had to plan, diagram and outline all the steps to take to build this software. I loved doing this because it was like being a real systems analyst in the field.";

    document.getElementById("projectCardTitle3").innerHTML = projectCardTitle3;
    document.getElementById("projectCardDesc3").innerHTML = projectCardDesc3;
}