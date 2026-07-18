function moveAllZerosToEnd(array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    if (array[left] === 0) {
      [array[left], array[right]] = [array[right], array[left]];
      right--;
    } else {
      left++;
    }
  }
}

const myArray = [1, 7, 0, 9, 0, 0, 1, -8, 2, 0];
console.log(myArray);
moveAllZerosToEnd(myArray);
console.log(myArray);
