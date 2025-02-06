
const card = document.querySelector('.card');
const form = document.querySelector('.card__form');
const email = document.querySelector('.card__input');

const emailError = document.querySelector('.card__error');
const dialog = document.querySelector('.success');
const subscribeBtn = document.querySelector('.card__btn');
const userEmail = document.querySelector('.success__email');


function checkValidity(event) {
  event.preventDefault();
  if (!email.validity.valid) {
    showError();
    email.focus();
  } else {
    card.style.display = "none"
    // console.log(email.value);
    dialog.showModal();
    userEmail.textContent = email.value
  }
  
}

form.addEventListener('submit', checkValidity)

form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkValidity
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


