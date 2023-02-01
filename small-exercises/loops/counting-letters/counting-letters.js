const string = prompt('Enter a string:').toLowerCase();
const count = {};

for (const letter of string) {
  if (letter in count) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }
}

console.log(count);
