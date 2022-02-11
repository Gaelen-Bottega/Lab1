var currentNode;
var parentElement;

function start()
{
    changeNav();
    insert();
}

// call start after the window loads
window.addEventListener("load", start, false);

function changeNav()
{
    var product = document.getElementById("navProduct");
    product.innerHTML = `<i class="fa-solid fa-table-cells pr-2 fa-sm"></i>Projects`;
}

// insert a nav element before the current element
// using the insertBefore method
function insert()
{
    parentElement = document.getElementById("parentNav");
    currentNode = document.getElementById("contactUsLi");
    var li = document.createElement("li");
    li.classList.add("nav-item");
    var navItem = document.createElement("a");
    
    navItem.href = "human-resources.html";
    navItem.classList.add("nav-link", "text-white");
    li.appendChild(navItem);
    var icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-person", "pr-2");
    navItem.appendChild(icon);
    var link = document.createTextNode("Human Resources");
    navItem.appendChild(link);
    parentElement.appendChild(li);
    currentNode.parentElement.insertBefore(li, currentNode);
} // end function insert




