function subarraysDivByK(nums, k) {
  let map = { 0: 1 };
  let sum = 0;
  let subarrays = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let temp = sum % k;
    if (temp < 0) {
      temp += k;
    }
    if (temp in map) {
      subarrays += map[temp];
    }
    map[temp] = (map[temp] || 0) + 1;
  }
  return subarrays;
}

// const nums = [4, 5, 0, -2, -3, 1];
const nums = [-1, 2, 9];
// const k = 5;
const k = 2;
console.log(subarraysDivByK(nums, k));
