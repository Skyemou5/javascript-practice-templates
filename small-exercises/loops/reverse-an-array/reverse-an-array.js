const array = [1, 2, 3, 4, 5];
const reverse = [];

for (let i = array.length - 1; i >= 0; i--) {
  reverse.push(array[i]);
}

console.log(reverse);
