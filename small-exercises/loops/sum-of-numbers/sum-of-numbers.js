const number = parseInt(prompt('Enter a number:'), 10);
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}

console.log(`The sum of numbers 1 to ${number} is ${sum}.`);
