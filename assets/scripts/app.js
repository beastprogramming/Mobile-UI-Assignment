const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () =>{
    const visibility = menu.getAttribute('data-toggle');

    if (visibility === "false") {
        menu.setAttribute('data-toggle', true);
        menuToggle.setAttribute('aria-expanded', true);
    }else if(visibility === "true"){
        menu.setAttribute('data-toggle', false);
        menuToggle.setAttribute('aria-expanded', false);
    }
})