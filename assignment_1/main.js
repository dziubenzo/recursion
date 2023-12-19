const TEST_NUMBERS = [0, 1, 2, 8, 19, 30, 55];

// Iterative approach
function fibs(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 2] + array[i - 1]);
    }
  }
  return array;
}

// Recursive approach
function fibsRec(number) {
  // Starting values
  let firstPreceding = 0;
  let lastPreceding = 1;
  let start = 0;
  let array = [];

  // Helper function that uses already calculated values to reduce the number of recursive calls to n
  function fibsRecBottomUp(counter, firstPrec, lastPrec) {
    if (counter > number) {
      return array;
    }
    if (counter === 0) {
      array.push(0);
    } else if (counter === 1) {
      array.push(1);
    } else {
      array.push(firstPrec + lastPrec);
    }
    fibsRecBottomUp(
      counter + 1,
      array[array.length - 1],
      array[array.length - 2]
    );
  }
  // Get every sequence starting from zero
  fibsRecBottomUp(start, firstPreceding, lastPreceding);
  return array;
}

console.log(fibsRec(TEST_NUMBERS[4]));
