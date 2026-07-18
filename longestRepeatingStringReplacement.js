function characterReplacement(s, k) {
  let longest = -Infinity;
  let left = 0;
  let map = {};
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]]) {
      map[s[right]] += 1;
      maxFreq = Math.max(maxFreq, map[s[right]]);
    } else {
      map[s[right]] = 1;
      maxFreq = Math.max(maxFreq, map[s[right]]);
    }

    while (right - left + 1 - maxFreq > k) {
      map[s[left]] -= 1;
      if (map[s[left]] === 0) {
        delete map[s[left]];
      }
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

const s = "ABAB";
// const s = "AABABBA";
// const s = "AABA";
// const s = "CCCCCCACBBBABAB";
// const a = "0123456789";

console.log(characterReplacement(s, 2));
