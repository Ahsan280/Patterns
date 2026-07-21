function findMaxLength(nums) {
  let map = { 0: -1 };
  let count = 0;
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count += 1;
    } else {
      count -= 1;
    }

    if (count in map) {
      longest = Math.max(longest, i - map[count]);
    } else {
      map[count] = i;
    }
  }
  return longest;
}
