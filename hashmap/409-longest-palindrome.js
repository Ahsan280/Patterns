function longestPalindrome(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  let longest = 0;
  let hasOdd = false;
  for (const key of Object.keys(map)) {
    if (map[key] % 2 === 0) {
      longest += map[key];
    } else {
      longest += map[key] - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? longest + 1 : longest;
}

const s = "abccccdd";
// const s = "bb";
// const s = "ab";

console.log(longestPalindrome(s));
