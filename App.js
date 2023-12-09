const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("Mobile-menu");
const closeMenu = document.getElementById("exit-menu");
const background = document.getElementById('wrapper');

hamburgerMenu.addEventListener("click", function() {



    menu.style.display = "block";
    menu.classList.toggle('open');
    background.classList.add('fade-background');


});




closeMenu.addEventListener("click", function() {
    menu.style.display = "none";
    menu.classList.remove('open');
    background.classList.remove('fade-background');


});