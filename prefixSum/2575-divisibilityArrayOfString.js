function divisibilityArray(word, m) {
  let result = [];
  let currentRemainder = 0
  for (let i = 0; i < word.length; i++) {
    currentRemainder = (currentRemainder * 10) + Number(word[i])
    currentRemainder = currentRemainder % m;
    result.push(currentRemainder === 0 ? 1 : 0);
  }
  return result;
}
// const word = "998244353";
const word = "86217457695827338571";
// const m = 3;
const m = 8;
console.log(divisibilityArray(word, m));
