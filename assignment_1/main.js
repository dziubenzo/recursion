const TEST_NUMBERS = [0, 1, 2, 8, 19, 30, 55];

// Iterative approach
function fibs(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1 || number === 2) {
    return 1;
  } else {
    let result = 0;
    let firstPrec = 1;
    let secondPrec = 1;
    for (let i = 3; i <= number; i++) {
      result = firstPrec + secondPrec;
      firstPrec = secondPrec;
      secondPrec = result;
    }
    return result;
  }
}

console.log(fibs(TEST_NUMBERS[6]));
