function findMaxLength(nums) {
  let map = { 0: -1 };
  let prefixOne = 0;
  let prefixZero = 0;
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      prefixZero += 1;
    } else {
      prefixOne += 1;
    }

    let currentDiff = prefixZero - prefixOne;
    if (currentDiff in map) {
      longest = Math.max(longest, i - map[currentDiff]);
    } else {
      map[currentDiff] = i;
    }
  }
  return longest;
}
// const nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];
// const nums = [0, 1, 0];
// const nums = [0, 1];
// const nums = [0, 0, 0, 1, 1, 1, 0];
const nums = [0, 1, 1];

console.log(findMaxLength(nums));
/*
nums = [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1]
Good part zeroes are equal to ones, meaning there difference should be 0. x - y = 0
lets take an example
lets say there are total 10 zeros and 5 ones in an array and we have a Green Part in which zeroes and ones are equal, in it there are 2 zeros and 2 ones
So how many are the remaining zeros and ones?
remaining zeros = total zeros - green part zeros = 10 - 2 = 8
remaining ones = total ones - green part ones = 5 - 2 = 3

Difference of remaining zeros and ones is 8 - 3 = 5
Difference of total zeros and ones is 10 - 5 = 5

What intuition do we get from this above example?
If Green is the good part where x-y is 0 then for the remaining red part the x - y should be what?
I think it should be equal to the difference of the total zeroes and ones
lets say total difference is denoted by D;
then our equation becomes
x - y = 0
x - y = D

so will store x - y at each prefixSum and then at each we will check 
at each prefixSum after calculating does there exist previously any x - y that was equal to D?
*/
