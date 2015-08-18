const max = process.argv[2];
let FizzBuzz = function*() {
  let currentValue = 1;
  while (currentValue <= max) {
    let value = currentValue
    if (currentValue % 15 == 0) {
      value = 'FizzBuzz'
    } else if (currentValue % 3 == 0) {
      value = 'Fizz'
    } else if (currentValue % 5 == 0) {
      value = 'Buzz'
    }
    currentValue++;
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
