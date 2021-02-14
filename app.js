let ham = document.querySelector('.ham');
let menu = document.querySelector('.menu');
ham.addEventListener('click', () => {
    menu.classList.toggle("menu-toggle");
});