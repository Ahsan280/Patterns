function countTriplets(sum, arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < sortedArray.length - 2; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;
    while (left < right) {
      const currentSum =
        sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (currentSum < sum) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

// const input = [-2, 0, 1, 3];
const input = [5, 1, 3, 4, 7];
// const input = [3, 0, 1, 1, 9, 7];
const sum = 12;

console.log(countTriplets(sum, input));
