function minSubarray(nums, p) {
  const totalSum = nums.reduce((a, b) => a + b);
  if (totalSum % p === 0) {
    return 0;
  }
  let target = totalSum % p;
  let map = { 0: -1 };
  let min = Infinity;
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let temp = (prefixSum - target) % p;
    if (temp < 0) {
      temp += p;
    }
    if (temp in map) {
      min = Math.min(min, i - map[temp]);
    }
    map[prefixSum % p] = i;
  }

  return min === Infinity || min === nums.length ? -1 : min;
}
// const nums = [3, 1, 4, 2];
const nums = [6, 3, 5, 2];
// const p = 6;
const p = 9;
console.log(minSubarray(nums, p));
