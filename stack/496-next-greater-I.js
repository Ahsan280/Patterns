/**
 * nums1 = [4,1,2], nums2 = [1,3,4,2]
 *
 */

function nextGreaterElement(nums1, nums2) {
  let nums1Map = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    nums1Map[nums1[i]] = i;
  }
  let stack = [nums2[nums2.length - 1]];
  for (let j = nums2.length - 1; j >= 0; j--) {
    if (nums2[j] in nums1Map) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums2[j]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[nums1Map[nums2[j]]] = stack[stack.length - 1];
      } else {
        result[nums1Map[nums2[j]]] = -1;
      }
    }
    stack.push(nums2[j]);
  }
  return result;
}

// const nums1 = [4, 1, 2];
// const nums2 = [1, 3, 4, 2];

const nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1, nums2));
