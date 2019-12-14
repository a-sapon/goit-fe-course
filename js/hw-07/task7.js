const sizeControlInput = document.getElementById('font-size-control');
const outputText = document.getElementById('text');
sizeControlInput.addEventListener('input', handleSize);

function handleSize(e) {
  outputText.style.fontSize = `${e.target.value}px`;
  if (e.target.value > 25) {
    outputText.classList.add('paint');
  } else {
    outputText.classList.remove('paint');
  }
}