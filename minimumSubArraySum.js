const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function minSubArrayLen(target, nums) {
  let subArrayLength = Infinity;

  let left = 0;

  let currentSum = 0;
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum >= target) {
      if (subArrayLength > right - left + 1) {
        subArrayLength = right - left + 1;
      }
      currentSum -= nums[left];
      left++;
    }
  }
  return subArrayLength === Infinity ? 0 : subArrayLength;
}

// const nums = [2, 3, 4, 2, 2, 1];
const nums = [1, 2, 3, 4, 5];
// const nums = [1, 1, 1, 1, 7];
// const nums = [8];

// console.log(await minSubArrayLen(11, nums));
console.log(await minSubArrayLen(15, nums));
