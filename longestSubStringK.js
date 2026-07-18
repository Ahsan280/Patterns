function longestKSubstr(s, k) {
  let left = 0;
  let map = {};
  let longest = -Infinity;
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]]) {
      map[s[right]] += 1;
    } else {
      map[s[right]] = 1;
    }
    if (Object.keys(map).length === k) {
      longest = Math.max(longest, right - left + 1);
    }
    while (Object.keys(map).length > k) {
      map[s[left]] -= 1;
      if (map[s[left]] === 0) {
        delete map[s[left]];
      }
      left++;
    }
  }
  return longest === Infinity ? -1 : longest;
}

const s = "aabacbebebe";
const k = 3;
console.log(longestKSubstr(s, k));
