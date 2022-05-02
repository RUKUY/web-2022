const emailField = document.querySelector('#email-container')
const passField = document.querySelector('#password-container')

const inputEmail = document.querySelector('#email-container input');
const inputPass = document.querySelector('#password-container input');

const oldStyle = emailField.style.border;

inputEmail.addEventListener('focus', () => {
    emailField.style.border = "3px solid #cdcdcd";
});

inputEmail.addEventListener('blur', () => {
    emailField.style.border = oldStyle;
});


inputPass.addEventListener('focus', () => {
    passField.style.border = "3px solid #cdcdcd";
});

inputPass.addEventListener('blur', () => {
    passField.style.border = oldStyle;
});

