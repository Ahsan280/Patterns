function findMaxLength(nums) {
  let longest = 0;
  let prefixZero = 0;
  let prefixOne = 0;
  let toBeReset = nums[0];
  let map;
  map[nums[0]] = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] !== toBeReset) {
      longest = Math.max(longest, 2 * Math.min(prefixOne + prefixZero));
    }
    if (nums[i] === 0) {
      prefixZero += 1;
    } else {
      prefixOne += 1;
    }
    if (nums[i])
      if (toBeReset === 0) {
        prefixZero = 0;
        toBeReset = 1;
      } else {
        prefixOne = 0;
        toBeReset = 0;
      }
  }
}
