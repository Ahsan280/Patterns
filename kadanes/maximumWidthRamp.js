function maxWidthRamp(nums) {
  let max = nums[0];
  let min = nums[0];
  let minEnding = nums[0];
  let maxEnding = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEnding = Math.max(maxEnding, nums[i] + maxEnding);
    minEnding = Math.min(minEnding, nums[i] + minEnding);

    
  }
  return max;
}

const nums = [6, 0, 8, 2, 1, 5];
console.log(maxWidthRamp(nums));
