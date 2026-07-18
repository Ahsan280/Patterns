function minimumWindow(s, t) {
  const lookup = {};
  for (const char of t) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  let charsAcquired = 0;
  let needed = Object.keys(lookup).length;
  let left = 0;
  let minimum = Infinity;
  let minimumSubString = "";
  let map = {};
  for (let right = 0; right < s.length; right++) {
    if (lookup[s[right]]) {
      map[s[right]] = (map[s[right]] || 0) + 1;
      if (map[s[right]] === lookup[s[right]]) {
        charsAcquired++;
      }
    }
    while (charsAcquired === needed) {
      if (minimum > right - left + 1) {
        minimum = right - left + 1;
        minimumSubString = s.substring(left, right + 1);
      }
      if (map[s[left]]) {
        map[s[left]] -= 1;
        if (map[s[left]] < lookup[s[left]]) {
          charsAcquired--;
        }
      }
      left++;
    }
  }
  return minimumSubString;
}

// const s = "ADOBECODEBANC";
// const s = "aa";
const s = "acbbaca";
// const t = "ABC";
// const t = "aa";
const t = "aba";

console.log(minimumWindow(s, t));
