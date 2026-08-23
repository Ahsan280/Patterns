function* numberGenerator() {
  let i = 0;
  while (i < 10) {
    yield i;
    i++;
  }
}

// const gen = numberGenerator();

function fibnoacci(n) {
  if (n < 0) {
    return [];
  }
  if (n === 0) {
    return [0];
  }
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }

  return result;
}

console.log(fibnoacci(2));
// 0, 1, 2, 3, 4, 5, 6, 7,  8
// 0, 1, 1, 2, 3, 5, 8, 13, 21

