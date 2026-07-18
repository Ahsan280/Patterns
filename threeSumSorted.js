function twoSum(target, sortedArray, left = 0) {
  let right = sortedArray.length - 1;
  let result = [];

  while (left < right) {
    let sum = sortedArray[left] + sortedArray[right];
    if (sum === target) {
      result.push([sortedArray[left], sortedArray[right]]);
      left++;
      right--;
      while (left < right && sortedArray[left] === sortedArray[left - 1]) {
        left++;
      }
      while (right > left && sortedArray[right] === sortedArray[right + 1]) {
        right--;
      }
    }
    if (sortedArray[left] + sortedArray[right] > target) {
      right--;
    }
    if (sortedArray[left] + sortedArray[right] < target) {
      left++;
    }
  }
  return result;
}

function threeSum(target, sortedArray) {
  let matches = [];
  for (let i = 0; i < sortedArray.length - 2; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue;
    }
    let subTarget = target - sortedArray[i];
    let left = i + 1;

    const subMatches = twoSum(subTarget, sortedArray, left);
    if (subMatches.length > 0) {
      subMatches.forEach((sub) => {
        matches.push([sortedArray[i], ...sub]);
      });
    }
  }
  return matches;
}

let myArray = [-3, -3, -2, -1, 0, 1, 1, 1, 2, 3, 4, 5, 9, 15];

console.log(twoSum(20, myArray));
console.log(threeSum(0, myArray));
