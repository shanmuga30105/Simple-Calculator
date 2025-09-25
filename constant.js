const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
}

function handleInput(value) {
  if (value === 'C') {
    currentInput = '';
  } else if (value === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (value === '=') {
    calculate();
    return;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-key');
    handleInput(key);
  });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=BackspaceEnterC()';
  if (allowedKeys.includes(e.key)) {
    if (e.key === 'Enter') {
      handleInput('=');
    } else if (e.key === 'c' || e.key === 'C') {
      handleInput('C');
    } else {
      handleInput(e.key);
    }
  }
});
