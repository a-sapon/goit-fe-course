const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const originalValue = nameOutput.textContent;

nameInput.addEventListener('input', handleInput);
function handleInput(e) {
  if (e.currentTarget.value) {
    nameOutput.textContent = e.currentTarget.value;
  } else {
    nameOutput.textContent = originalValue;
  }
}