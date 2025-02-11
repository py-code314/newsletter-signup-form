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
  const isValid = validateEmail(email.value);
  if (!email.validity.valid || isValid === false) {
    showError();
    email.focus();
  } else {
    showDialog()
  }
}


function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}


function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Enter your email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Valid email required';
  } else {
    emailError.textContent = "Email pattern doesn't match";
  }
  emailError.className = 'error-msg';
  email.className = 'card__input active';
}


function showDialog() {
  card.classList.add('hidden');
  card.classList.remove('visible');
  dialog.showModal();
  userEmail.textContent = email.value;
  userEmail.style.fontWeight = '700';
  resetForm();
}

function resetForm() {
  email.value = '';
  emailError.textContent = '';
  emailError.classList.remove('error-msg');
  email.classList.remove('active');
}



function dismissMsg() {
  // console.log('close dialog');
  dialog.close();
  // console.log('show form');
  showForm();
}


function showForm() {
  card.classList.add('visible');
  card.classList.remove('hidden');
}


form.addEventListener('submit', checkValidity);

form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkValidity(event);
  }
});


dismissBtn.addEventListener('click', dismissMsg);

dialog.addEventListener('keydown', (event) => {
  // console.log(event.key);
  if (event.key === 'Escape') {
    dismissMsg()
  }
})
