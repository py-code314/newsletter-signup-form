// console.log('it works');
const form = document.querySelector('.card__form');
const email = document.querySelector('.card__input');
const emailError = document.querySelector('.card__error');
const dialog = document.querySelector('.card__success');

form.addEventListener('submit', (event) => {
  // const invalidInput = document.querySelector(':invalid');
  if (!email.validity.valid) {
    event.preventDefault();
    showError()
    email.focus()
  } 
  
})

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Enter your email address"
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Valid email required"
  }
  emailError.className = "error-msg"
  email.className = "card__input active"
}


