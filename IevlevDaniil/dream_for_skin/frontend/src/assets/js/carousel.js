const sliderMain = document.querySelector('.slider__main');
const sliderImages = document.querySelectorAll('.slider__main img'); 

const size = document.documentElement.clientWidth;
let swipeCounter = 1;

sliderMain.style.transform = 'translateX(' + (-size * swipeCounter) + 'px)';


const btnPrev = document.querySelector('#prev-button');
const btnNext = document.querySelector('#next-button');

btnNext.addEventListener('click', () => {
    if (swipeCounter >= sliderImages.length - 1) return;

    swipeCounter++;
    
    sliderMain.style.transition = "transform 0.4s ease-in-out";
    sliderMain.style.transform = 'translateX(' + (-size * swipeCounter) + 'px)';
});

btnPrev.addEventListener('click', () => {
    if (swipeCounter <= 0) return;

    swipeCounter--;
    
    sliderMain.style.transition = "transform 0.4s ease-in-out";
    sliderMain.style.transform = 'translateX(' + (-size * swipeCounter) + 'px)';
});


sliderMain.addEventListener('transitionend', () => {
    if (sliderImages[swipeCounter].id === 'last-clone'){
        swipeCounter = sliderImages.length - 2;

        sliderMain.style.transition = "none";
        sliderMain.style.transform = 'translateX(' + (-size * swipeCounter) + 'px)';   
    }
    if (sliderImages[swipeCounter].id === 'first-clone'){
        swipeCounter = sliderImages.length - swipeCounter;
        
        sliderMain.style.transition = "none";
        sliderMain.style.transform = 'translateX(' + (-size * swipeCounter) + 'px)';   
    }
});

