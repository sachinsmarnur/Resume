let Cursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navbar-nav li");

window.addEventListener("mousemove", cursor);
function cursor(e){
    Cursor.style.top = e.pageY + "px";
    Cursor.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        Cursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
        Cursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
});