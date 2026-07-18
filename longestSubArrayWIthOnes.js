function longestOnes(nums, k) {
  let longest = -Infinity;
  let map = {};
  let left = 0;
  let zeros = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros += 1;
    }

    while (zeros > k) {
      if (nums[left] === 0) {
        zeros -= 1;
      }
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

// const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
// const k = 2;
const k = 3;

console.log(longestOnes(nums, k));
