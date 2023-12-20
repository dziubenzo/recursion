const smallUnsortedArray = [3, 1, 2, 0];
const unsortedArray = [2, 3, 9, 1, 5, 4, 7, 8, 6, 0];
const testArray20 = [
  9, 14, 11, 15, 16, 8, 10, 4, 6, 7, 2, 18, 3, 19, 13, 1, 17, 5, 20, 12,
];
const testArray50 = [
  18, 41, 5, 50, 34, 39, 20, 2, 29, 27, 22, 6, 26, 42, 16, 10, 11, 28, 30, 45,
  37, 17, 48, 49, 14, 12, 43, 44, 15, 8, 3, 1, 25, 21, 32, 9, 36, 46, 33, 13,
  31, 7, 24, 40, 35, 19, 4, 23, 47, 38,
];
const withDuplicates = [1, 2, 35, 2, 5, 4, 14, 1, 2];

function mergeSort(array) {
  // Base case, which is an array of one
  if (array.length === 1) {
    return array;
  } else {
    // Sort left half of the array
    let leftSide = mergeSort(array.slice(0, array.length / 2));
    // Sort right half of the array
    let rightSide = mergeSort(array.slice(array.length / 2));
    // Compare numbers in both halves (merge them one by one)
    // Pick the smaller number or the only number remaining in both halves
    // Remove it from the respective half, convert it back to a number and add it to sortedArray
    // Continue until both halves are empty and return sortedArray
    let sortedArray = [];
    while (leftSide.length + rightSide.length > 0) {
      if (leftSide[0] <= rightSide[0] || rightSide.length === 0) {
        sortedArray.push(Number(leftSide.splice(0, 1)));
      } else if (leftSide[0] >= rightSide[0] || leftSide.length === 0) {
        sortedArray.push(Number(rightSide.splice(0, 1)));
      }
    }
    return sortedArray;
  }
}

console.log(mergeSort(unsortedArray));
