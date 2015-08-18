const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let currentValue = 1;
    return {
      next() {
        if (currentValue > max) return { done: true };
        let value = null
        if (currentValue % 15 == 0) {
          value = 'FizzBuzz'
        } else if (currentValue % 3 == 0) {
          value = 'Fizz'
        } else if (currentValue % 5 == 0) {
          value = 'Buzz'
        } else {
          value = currentValue
        }
        currentValue++;

        return { done: false, value: value }
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
