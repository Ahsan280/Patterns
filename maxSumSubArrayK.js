function maxSubarraySum(arr, k) {
  let left = 1;
  let right = k;
  let prevSum = 0;

  for (let i = 0; i < right; i++) {
    prevSum += arr[i];
  }
  let max = prevSum;

  while (right < arr.length) {
    prevSum = prevSum - arr[left - 1] + arr[right];

    if (prevSum > max) {
      max = prevSum;
    }
    left++;
    right++;
  }
  return max;
}

const myArray = [45, 7, 1, 0, 9, 10, 56, 10, 12, 5, 6];
console.log(myArray);
console.log(maxSubarraySum(myArray, 3));
