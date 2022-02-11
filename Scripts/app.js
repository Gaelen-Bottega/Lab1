function start()
{
    changeNav();
}

// call start after the window loads
window.addEventListener("load", start, false);

function changeNav()
{
    var product = document.getElementById("navProduct");
    product.innerHTML = `<i class="fa-solid fa-table-cells pr-2 fa-sm"></i>Projects`;
}




