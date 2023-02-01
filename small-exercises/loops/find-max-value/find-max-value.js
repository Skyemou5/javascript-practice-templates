const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = numbers[0];

for (const number of numbers) {
  if (number > max) {
    max = number;
  }
}

console.log(`The maximum value is ${max}.`);
