const choices = ['rock', 'paper', 'scissors'];
const computerChoice = choices[Math.floor(Math.random() * 3)];
const userChoice = prompt('Rock, paper, or scissors?').toLowerCase();

if (userChoice === computerChoice) {
  console.log('It\'s a tie!');
} else if (userChoice === 'rock' && computerChoice === 'scissors' ||
           userChoice === 'paper' && computerChoice === 'rock' ||
           userChoice === 'scissors' && computerChoice === 'paper') {
  console.log('You win!');
} else {
  console.log('Computer wins.');
}

