let menuBar = document.querySelector('.menu');
let nav = document.querySelector('nav');
let navItems = document.querySelectorAll('nav > a');

function menuBarToggle(){
    nav.classList.toggle('activenav');
}

menuBar.addEventListener('click', menuBarToggle);

navItems.forEach(a => {
    a.addEventListener('click', menuBarToggle);
});