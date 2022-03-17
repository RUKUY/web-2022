const productNumber = document.querySelector('#product-number');

const plusBtn = document.querySelector('#plus-product');
const minusBtn = document.querySelector('#minus-product');

plusBtn.addEventListener('click', () => {
    if (productNumber.innerText == 100) return;

    productNumber.innerText = Number(productNumber.innerText) + 1
});


minusBtn.addEventListener('click', () => {
    if (productNumber.innerText == 1) return;

    productNumber.innerText = Number(productNumber.innerText) - 1
});