var menuIcon=document.querySelector(".hamburger-menu");
var navBar=document.querySelector(".nav");

menuIcon.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("change");
    navBar.classList.toggle("transition")
})