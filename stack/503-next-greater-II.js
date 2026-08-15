/**
 * nums = [4, 2, 3, 1, 2]
 * stack = [4, 3]
 * ans = [-1, 4, 4, 3, 3]
 */
function previousGreater(nums) {
  const stack = [nums[0]];
  const result = [-1];
  for (let i = 1; i < nums.length; i++) {
    let recent = stack[stack.length - 1];
    if (recent > nums[i]) {
      result.push(recent);
    } else {
      while (stack[stack.length - 1] <= nums[i] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
    }
    stack.push(nums[i]);
  }
  return result;
}

function nextGreaterElements(nums) {
  const stack = [nums[nums.length - 1]];
  const result = [-1];
  const map = { [nums[nums.length - 1]]: nums.length - 1 };
  for (let i = nums.length - 2; i >= 0; i--) {
    let recent = stack[stack.length - 1];
    if (recent > nums[i]) {
      result.push(recent);
    } else {
      while (stack[stack.length - 1] <= nums[i] && stack.length > 0) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
    }
    stack.push(nums[i]);
  }
  return result;
}

// const nums = [10, 4, 2, 20, 40, 12, 30];
// const nums = [10, 20, 30, 40];
// console.log(previousGreater(nums));

const nums = [1, 2, 3, 4, 3];
console.log(nextGreaterElements(nums));
