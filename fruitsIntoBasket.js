function totalFruit(fruits) {
  let baskets = 2;
  let left = 0;
  let distinct = 0;
  let maximum = -Infinity;
  let map = {};
  for (let right = 0; right < fruits.length; right++) {
    if (map[fruits[right]]) {
      map[fruits[right]] += 1;
    } else {
      map[fruits[right]] = 1;
      distinct += 1;
    }

    while (distinct > baskets) {
      map[fruits[left]] -= 1;
      if (map[fruits[left]] === 0) {
        delete map[fruits[left]];
        distinct -= 1;
      }
      left++;
    }

    maximum = Math.max(maximum, right - left + 1);
  }
  return maximum;
}
// const fruits = [1, 2, 1];
// const fruits = [0, 1, 2, 2];
const fruits = [1, 2, 3, 2, 2];
console.log(totalFruit(fruits));
