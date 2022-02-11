// Gaelen Rhoads
// 100804776
// 02/09/2022 

/**
 * Start function that calls other functions in this file
 */
function start()
{
    changeNav();
    insert();
}

// call start after the window loads
window.addEventListener("load", start, false);

/**
 * Changes 'products' to 'projects' in navbar
 */
function changeNav()
{
    // Find element of navigation link using Id and then set the HTML to the required text
    var product = document.getElementById("navProduct");
    product.innerHTML = `<i class="fa-solid fa-table-cells pr-2 fa-sm"></i>Projects`;
}

/**
 * Inserts a navigation link in between two other navigation items
 */
function insert()
{
    var currentNode;
    var parentElement;

    // Set the parent element equal to the parent ul tag holding the nav bar
    parentElement = document.getElementById("parentNav");

    // Set the current node to the nav link we want to insert our new one before
    currentNode = document.getElementById("contactUsLi");

    // Create new list item and add the bootstrap class
    var li = document.createElement("li");
    li.classList.add("nav-item");
    
    // Create a link element and add the redirect and bootstrap classes to it
    var navItem = document.createElement("a");
    navItem.href = "human-resources.html";
    navItem.classList.add("nav-link", "text-white");

    // Nest the link tag inside the list item
    li.appendChild(navItem);

    // Create an i tag to hold font awesome icon and add needed classes.
    // Then nest it before the link tag
    var icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-person", "pr-2");
    navItem.appendChild(icon);

    // Add text to the link after the icon and append it to the navItem node
    var link = document.createTextNode("Human Resources");
    navItem.appendChild(link);

    // Append new list item to parent ul tag and insert it before Contact Us link
    parentElement.appendChild(li);
    currentNode.parentElement.insertBefore(li, currentNode);
} // end function insert




