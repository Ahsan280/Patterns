function lengthOfLongestSubstring(s) {
  if (s.length < 1) {
    return 0;
  }
  let map = {};
  let left = 0;
  let longest = -Infinity;
  let distinct = 0;
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]]) {
      map[s[right]] += 1;
    } else {
      map[s[right]] = 1;
      distinct += 1;
    }

    while (distinct < right - left + 1) {
      map[s[left]] -= 1;
      if (map[s[left]] === 0) {
        delete map[s[left]];
        distinct -= 1;
      }
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

// const s = "abcabcbb";
const s = "pwwkew";
// const s = "abc";
console.log(lengthOfLongestSubstring(s));
