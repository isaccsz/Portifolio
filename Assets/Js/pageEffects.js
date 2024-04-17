window.onscroll = function() { scrollFunction() };
var headerVh = window.innerHeight * 0.1;
var pageHeader = document.getElementById("header");
var clonedHeader = null;
var container = document.getElementById("index-container");
var alterado = false;

function scrollFunction() {
    if (document.body.scrollTop > headerVh || document.documentElement.scrollTop > headerVh) {
        if (!alterado) {
            clonedHeader = pageHeader.cloneNode(true);
            clonedHeader.removeAttribute("id");
            clonedHeader.classList.add("copy-header");
            clonedHeader.style.position = "fixed";
            clonedHeader.style.top = "0";
            clonedHeader.style.left = "0";
            clonedHeader.style.width = "100%";
            clonedHeader.style.opacity = 0;
            container.style.zIndex = 1;
            container.appendChild(clonedHeader);


            setTimeout(() => {
                clonedHeader.style.opacity = "1";
            }, 20); 
            
            alterado = true;
            pageHeader.style.opacity = 0;
        }
    } else {
        if (clonedHeader !== null) {
            container.removeChild(clonedHeader);
            clonedHeader = null;
            alterado = false;
            pageHeader.style.opacity = 1;
        }
    }
}