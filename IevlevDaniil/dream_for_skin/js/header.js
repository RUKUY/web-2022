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