function findMedianSortedArrays(nums1, nums2) {
  let left = 0;
  let right = 0;
  let resultantLength = nums1.length + nums2.length;
  let isSingleMiddle = resultantLength % 2 !== 0;
  let mergedArray = [];
  let middle = isSingleMiddle
    ? Math.floor(resultantLength / 2)
    : resultantLength / 2;
  let medians = [];

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      mergedArray.push(nums1[left]);
      if (isSingleMiddle) {
        if (mergedArray.length === middle + 1) {
          return nums1[left];
        }
      } else {
        if (
          mergedArray.length === middle ||
          mergedArray.length === middle + 1
        ) {
          medians.push(nums1[left]);
        }
      }

      left++;
    }
    if (nums1[left] > nums2[right]) {
      mergedArray.push(nums2[right]);
      if (isSingleMiddle) {
        if (mergedArray.length === middle + 1) {
          return nums2[right];
        }
      } else {
        if (
          mergedArray.length === middle ||
          mergedArray.length === middle + 1
        ) {
          medians.push(nums2[right]);
        }
      }
      right++;
    }
    if (medians.length === 2) {
      return (medians[0] + medians[1]) / 2;
    }
  }
  while (left < nums1.length) {
    mergedArray.push(nums1[left]);
    if (isSingleMiddle) {
      if (mergedArray.length === middle) {
        return nums1[left];
      }
    } else {
      if (mergedArray.length === middle || mergedArray.length === middle + 1) {
        medians.push(nums1[left]);
      }
    }

    left++;
  }

  while (right < nums2.length) {
    mergedArray.push(nums2[right]);
    if (isSingleMiddle) {
      if (mergedArray.length === middle) {
        return nums2[right];
      }
    } else {
      if (mergedArray.length === middle || mergedArray.length === middle + 1) {
        medians.push(nums2[right]);
      }
    }
    right++;
  }
  if (medians.length === 2) {
    return (medians[0] + medians[1]) / 2;
  }
}
const nums1 = [1, 2];
const nums2 = [3, 4];

// const nums1 = [1, 3];
// const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
