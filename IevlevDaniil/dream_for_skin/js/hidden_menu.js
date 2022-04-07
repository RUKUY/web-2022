const displayMenuBtn = document.querySelector('#burger-btn');
const hiddenMenu = document.querySelector('.hidden__menu__container');
const closeMenuBtn = document.querySelector('#close-menu-btn');

let menuShown = false;

displayMenuBtn.addEventListener('click', () => {
    if (!menuShown) {
        console.log("открылось");
        hiddenMenu.style.display = "block";
        document.body.classList.add("menu__opened");
    } else {
        return;
    }

    menuShown = !menuShown;
});

closeMenuBtn.addEventListener('click', () => {
    if (menuShown) {
        console.log("закрылось");
        hiddenMenu.style.display = "none";
        document.body.classList.remove("menu__opened");
    } else {
        return;
    }

    menuShown = !menuShown;
});


