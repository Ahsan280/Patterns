function pivotIndexBrute(nums) {
  let prefixMap = {};
  let suffixMap = {};
  prefixMap[0] = 0;
  suffixMap[nums.length - 1] = 0;
  let prefixSum = 0;
  let suffixSum = 0;
  for (let i = 1; i < nums.length; i++) {
    prefixSum += nums[i - 1];
    prefixMap[i] = prefixSum;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixSum += nums[i + 1];
    suffixMap[i] = suffixSum;
  }
  console.log(prefixMap);
  console.log(suffixMap);

  for (let i = 0; i < nums.length; i++) {
    if (prefixMap[i] === suffixMap[i]) {
      return i;
    }
  }
  return -1;
}

const nums = [1, 7, 3, 6, 5, 6];

// total sum = 28;
// prefixSum at 3 = 11
// suffixSum at 3 will be?  28 - 11 - 6 nums[i] is (6)  = 17
// const nums = [1, 2, 3];
// const nums = [2, 1, -1];

function pivotIndex(nums) {
  let totalSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    
    suffixSum = totalSum - prefixSum - nums[i];
    if (prefixSum === suffixSum) {
      return i;
    }
    prefixSum += nums[i];
  }
  return -1;
}
console.log(pivotIndexBrute(nums));
console.log(pivotIndex(nums));
