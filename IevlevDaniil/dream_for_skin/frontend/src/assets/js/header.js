const headerNarrowInput = document.querySelector('#input-narrow-search');

headerNarrowInput.addEventListener('focus', () => {
    const headerNarrowBtn = document.querySelector('.header__narrow__menu__btn');
    
    const inputWidth = headerNarrowInput.style.width;
    const btnDisplayStyle = headerNarrowBtn.style.display;

    if (document.documentElement.clientWidth <= 1200){
        headerNarrowInput.style.width = '100%';
        headerNarrowBtn.style.display = 'none';
        
        headerNarrowInput.addEventListener('blur', () => {
            headerNarrowInput.style.width = inputWidth;
            headerNarrowBtn.style.display = btnDisplayStyle;
        });
    }
});


const accountBtn = document.querySelector('#account-button');
const accountNarrowMenu = document.querySelector('.narrow__account__container');

let displayFlag = false;

accountBtn.addEventListener('click', () => {
    if (displayFlag == false){
        accountNarrowMenu.style.display = "flex";
        displayFlag = true;
    }
    else {
        accountNarrowMenu.style.display = "none";
        displayFlag = false;
    }
});

