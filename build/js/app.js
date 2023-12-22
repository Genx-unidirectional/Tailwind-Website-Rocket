function init(){
const hambergerBtn = document.getElementById("hamberger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const toggleMenu = ()=>{
    hambergerBtn.classList.toggle("toggle-btn");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
}
hambergerBtn.addEventListener("click", toggleMenu)
mobileMenu.addEventListener("click", toggleMenu)
}

document.addEventListener("DOMContentLoaded",init);