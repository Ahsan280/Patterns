function findDuplicateHash(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    } else {
      map[nums[i]] = 1;
    }
  }
}

// const nums = [1, 3, 4, 2, 2];
const nums = [3, 1, 3, 4, 2];
// console.log(findDuplicateHash(nums));

function findDuplicate(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    fast = nums[fast];
    if (fast === slow) {
      slow = 0;
      while (fast !== slow) {
        fast = nums[fast];
        slow = nums[slow];
      }
      return slow;
    }
  }
}

console.log(findDuplicate(nums));
