const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', handleInput);

function handleInput(e) {
  if (e.currentTarget.value.length !== 6) {
    e.currentTarget.classList.add('invalid');
    e.currentTarget.classList.replace('valid', 'invalid');
  } else {
    e.currentTarget.classList.add('valid');
    e.currentTarget.classList.replace('invalid', 'valid');
  }
}