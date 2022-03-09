const imgs = document.querySelectorAll('.img-hidden');
const errText = document.querySelectorAll('hidden');
const invalidEmail = document.getElementById('not-email');
const invalidPass = document.getElementById('not-password');
const passImg = document.getElementById('pass-img');
const emailImg = document.getElementById('email-img');
const nonLast = document.getElementById('not-last');
const nonFirst = document.getElementById('not-first');
const nonEmail = document.querySelector('.non-email');
const lImg = document.getElementById('l-img');
const fImg = document.getElementById('f-img');

const email = document.getElementById('email');
const password = document.getElementById('password');
const lastName = document.getElementById('last-name');
const firtName = document.getElementById('first-name');
const submitBtn = document.getElementById('btn-submit');

let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+$/

const validate = () => {
    if (regx.test(email.value)) {
        console.log("success");
    } else {
        invalidEmail.classList.add('txt-right');
    }
}

const checkDataEntry = () => {
    if (email.value == "" || password.value == "") {
        passImg.classList.add('show');
        emailImg.classList.add('show');
        nonEmail.classList.add('txt-right');
        invalidPass.classList.add('txt-right');
    }
    else {
        passImg.classList.remove('show');
        emailImg.classList.remove('show');
        nonEmail.classList.remove('txt-right');
        invalidPass.classList.remove('txt-right');
    }

    if(lastName.value == "" || firtName.value == "") {
        lImg.classList.add('show');
        fImg.classList.add('show');
        nonFirst.classList.add('txt-right');
        nonLast.classList.add('txt-right');
    } else {
        nonFirst.classList.remove('txt-right');
        nonLast.classList.remove('txt-right');
        lImg.classList.remove('show');
        fImg.classList.remove('show');
    }
}

const reset = () => {
    lastName.value = "";
    firtName.value = "";
    password.value = "";
    email.value = "";
}

submitBtn.addEventListener('click' ,(e) => {
    e.preventDefault();
    checkDataEntry();
    validate();
    reset();
})