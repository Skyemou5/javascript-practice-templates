const guessInput = document.querySelector('#guess');
const submitBtn = document.querySelector('#submit');
const resultDiv = document.querySelector('#result');

const targetNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

submitBtn.addEventListener('click', function() {
  numberOfGuesses++;
  const guess = parseInt(guessInput.value, 10);
  if (guess === targetNumber) {
    resultDiv.textContent = 'You win! It took you ' + numberOfGuesses + ' guesses.';
    submitBtn.disabled = true;
  } else if (guess < targetNumber) {
    resultDiv.textContent = 'Too low. Guess again.';
  } else {
    resultDiv.textContent = 'Too high. Guess again.';
  }
});
