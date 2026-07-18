function prefixSum(array) {
  let sum = 0;
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      sum += array[i - 1];
      map[array[i]] = sum;
    } else {
      map[array[i]] = i;
    }
  }
  return map;
}

const array = [1, 2, 3, 4, 5];
console.log(prefixSum(array));

function suffixSum(array) {
  let sum = 0;
  let map = {};
  map[array[array.length - 1]] = 0;
  console.log(map);
  for (let i = array.length - 2; i >= 0; i--) {
    sum += array[i + 1];
    map[array[i]] = sum;
  }
  return map;
}

console.log(suffixSum(array));
