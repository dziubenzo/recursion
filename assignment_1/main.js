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
  if (number === 0) {
    return 0;
  } else if (number === 1 || number === 2) {
    return 1;
  } else {
  }
}

console.log(fibs(TEST_NUMBERS[4]));
