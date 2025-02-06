
const card = document.querySelector('.card');
const form = document.querySelector('.card__form');
const email = document.querySelector('.card__input');

const emailError = document.querySelector('.card__error');
const dialog = document.querySelector('.success');
const subscribeBtn = document.querySelector('.card__btn');
const userEmail = document.querySelector('.success__email');
const dismissBtn = document.querySelector('.success__btn');


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
    userEmail.style.fontWeight = '700'
    email.value = ""
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


function dismissMsg() {
  dialog.close()
  if (window.innerWidth < 786) {
    card.style.display = 'block'
  } else {
    card.style.display = 'flex';
  }
  
}
dismissBtn.addEventListener('click', dismissMsg)