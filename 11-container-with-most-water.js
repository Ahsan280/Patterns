function maxArea(height) {
  let maxArea = -Infinity;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      maxArea = Math.max(maxArea, height[left] * (right - left));
      left++;
    } else {
      maxArea = Math.max(maxArea, height[right] * (right - left));
      right--;
    }
  }
  return maxArea;
}

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height = [1, 1];
console.log(maxArea(height));
