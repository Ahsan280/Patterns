function subarraySum(nums, k) {
    let sum = 0;
    let subarrays = 0;
    let map = { 0: 1 }
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let temp = sum - k;
        if (temp in map) {
            subarrays += map[temp];
        }
        map[sum] = (map[sum] || 0) + 1;
    }
    return subarrays;
}

const nums = [1, 2, 3], k = 3;
// const nums = [1, 1, 1], k = 2;
// const nums = [-1, -1, 1], k = 0;
// const nums = [1, -1, 0], k = 0;

console.log(subarraySum(nums, k))