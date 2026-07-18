function merge(left, right) {
  let leftPointer = 0;
  let rightPointer = 0;
  let result = [];
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }
  while (leftPointer < left.length) {
    result.push(left[leftPointer]);
    leftPointer++;
  }
  while (rightPointer < right.length) {
    result.push(right[rightPointer]);
    rightPointer++;
  }
  return result;
}

function MergeSort(array) {
  let length = array.length;
  if (length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  let sortedLeft = MergeSort(left);
  let sortedRight = MergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function threeSumClosest(nums, target) {
  let sortedArray = MergeSort(nums);
  let smallestDifference = Infinity;
  let closest = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum =
        sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (currentSum === target) {
        return currentSum;
      }

      const currentDifference = Math.abs(currentSum - target);
      if (currentDifference < smallestDifference) {
        smallestDifference = currentDifference;
        closest = currentSum;
      }
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
}

// let myArray = [-3, -3, -2, -1, 0, 1, 1, 1, 2, 3, 4, 5, 9, 15];
let myArray = [-1, 2, 1, -4];
// console.log(twoSum(20, myArray));
console.log(threeSumClosest(myArray, 1));

// console.log(MergeSort(myArray));
