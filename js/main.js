// Global Variables
const card = document.querySelector('.card');
const form = document.querySelector('.card__form');
const email = document.querySelector('.card__input');
const emailError = document.querySelector('.card__error');
const dialog = document.querySelector('.success');
const userEmail = document.querySelector('.success__email');
const dismissBtn = document.querySelector('.success__btn');

/* Validate the email input of the form */
function checkValidity(event) {
  event.preventDefault();
  const isValidEmail = validateEmail(email.value);
  const isFormValid = email.validity.valid && isValidEmail;

  // Display Error message if email is invalid and show Success dialog if valid
  if (!isFormValid) {
    showError();
    email.focus();
  } else {
    showSuccessDialog();
  }
}

/* Validate a given email address against an email pattern */
function validateEmail(emailAddress) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(emailAddress);
}

/* Display an error message for invalid email input */
function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Enter your email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Valid email required';
  } else if (!validateEmail(email.value)) {
    emailError.textContent = "Email pattern doesn't match";
  }

  // Add error styles to the error message and email input
  emailError.className = 'error-msg';
  email.className = 'card__input active';
}

/* Display Success dialog and hide the form after a valid email address has been entered */
function showSuccessDialog() {
  hideForm();
  dialog.showModal();
  userEmail.textContent = email.value;
  userEmail.style.fontWeight = '700';
  resetForm();
}

/* Hide the form */
function hideForm() {
  card.classList.add('hidden');
  card.classList.remove('visible');
}

/* Reset the form to its original state */
function resetForm() {
  email.value = '';
  emailError.textContent = '';
  emailError.classList.remove('error-msg');
  email.classList.remove('active');
}

/* Close Success dialog and displays the form again */
function dismissMsg() {
  dialog.close();
  showForm();
}

/* Display the form */
function showForm() {
  card.classList.add('visible');
  card.classList.remove('hidden');
}

/* Event listeners */
form.addEventListener('submit', checkValidity);

form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkValidity(event);
  }
});

dismissBtn.addEventListener('click', dismissMsg);

dialog.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dismissMsg();
  }
});
