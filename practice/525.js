function longestContigous(nums) {
  let map = { 0: -1 };
  let totalZeros = 0;
  let totalOnes = 0;
  nums.forEach((num) => {
    if (num === 0) {
      totalZeros++;
    } else {
      totalOnes++;
    }
  });
  let prefixZero = 0;
  let prefixOne = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      prefixZero++;
    } else {
      prefixOne++;
    }
    let currentDiff = prefixZero - prefixOne;
    if (currentDiff in map) {
      max = Math.max(max, i - map[currentDiff]);
    } else {
      map[currentDiff] = i;
    }
  }
  return max;
}
// const nums = [0, 1];
// const nums = [0, 1, 0];
const nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];
console.log(longestContigous(nums));
