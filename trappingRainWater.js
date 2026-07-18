function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let total = 0;
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(height[left], leftMax);
      total += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(height[right], rightMax);
      total += rightMax - height[right];
    }
  }
  return total;
}

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height = [4, 2, 0, 3, 2, 5];
// const height = [4, 2, 3];
console.log(trap(height));
