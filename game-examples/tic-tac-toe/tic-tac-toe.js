const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    squares[i].textContent = currentPlayer;
    if (checkForWinner()) {
      alert(currentPlayer + ' wins!');
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
}

function checkForWinner() {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 1].textContent === currentPlayer &&
        squares[i + 2].textContent === currentPlayer) {
      return true;
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 3].textContent === currentPlayer &&
        squares[i + 6].textContent === currentPlayer) {
      return true;
    }
  }
  // check diagonals
  if (squares[0].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) {
    return true;
  }
  if (squares[2].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[6].textContent === currentPlayer) {
    return true;
  }
  return false;
}
