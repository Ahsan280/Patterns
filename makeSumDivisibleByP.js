// The following solution does not work


function minSubarray(nums, p) {
  const totalSum = nums.reduce((a, b) => a + b);
  if (totalSum % p === 0) {
    return 0;
  }
  let min = Infinity;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if ((totalSum - nums[right]) % p === 0) {
      min = Math.min(min, 1);
    }
    let subArray = nums.slice(left, right + 1);
    let currentSubSum = subArray.reduce((a, b) => a + b);
    let temp = totalSum - currentSubSum;
    while (temp % p === 0) {
      min = Math.min(min, subArray.length);
      left++;
      subArray = nums.slice(left, right + 1);
      currentSubSum = subArray.reduce((a, b) => a + b);
      temp = totalSum - currentSubSum;
    }
  }
  return min === Infinity ? -1 : min;
}

// const nums = [3, 1, 4, 2];
const nums = [6, 3, 5, 2];
// const p = 6;
const p = 9;
console.log(minSubarray(nums, p));
