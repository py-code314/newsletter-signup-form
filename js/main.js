const card = document.querySelector('.card');
const form = document.querySelector('.card__form');
const email = document.querySelector('.card__input');

const emailError = document.querySelector('.card__error');
const dialog = document.querySelector('.success');
const subscribeBtn = document.querySelector('.card__btn');
const userEmail = document.querySelector('.success__email');
const dismissBtn = document.querySelector('.success__btn');

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email) 
  } 

function checkValidity(event) {
  event.preventDefault();
  const isValid = validateEmail(email.value)
  if (!email.validity.valid || isValid === false) {
    showError();
    email.focus();
  } else {
    card.style.display = 'none';
    dialog.showModal();
    userEmail.textContent = email.value;
    userEmail.style.fontWeight = '700';
    email.value = '';
    emailError.textContent = '';
    emailError.classList.remove('error-msg');
    email.classList.remove('active');
  }
}

form.addEventListener('submit', checkValidity);

form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkValidity;
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Enter your email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Valid email required';
  } else {
    emailError.textContent = "Email pattern doesn't match"
  }
  emailError.className = 'error-msg';
  email.className = 'card__input active';
}

function showForm() {
  if (window.innerWidth < 786) {
    card.style.display = 'block';
  } else {
    card.style.display = 'flex';
  }
}

function dismissMsg() {
  dialog.close();
  
  showForm()
}
dismissBtn.addEventListener('click', dismissMsg);

dialog.addEventListener('close', (event) => {
  console.log(event.target.returnValue);
  if (event.target.returnValue === '') {
    
    showForm();
  }
}
)
