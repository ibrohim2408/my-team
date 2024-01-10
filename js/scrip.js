var elburger = document.querySelector(".header-burger");
var elclose = document.querySelector(".clos-img");
var elmenubox = document.querySelector(".header-menu-box");

elburger.addEventListener("click", function(){
    elmenubox.style.display = "flex";

})

elclose.addEventListener("click", function(){
    elmenubox.style.display = "none ";

})
