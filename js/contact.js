'use strict';

const formElement = document.querySelector('#contact-form');
const submitBtn = document.querySelector('#submit');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = validateData();
});

function validateData() {
  const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

  // check if email is valid
  const isEmailValid = email.value === 0 || emailRegex.test(email.value);
  console.log(isEmailValid);
}
