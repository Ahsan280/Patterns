function minWindow(s, t) {
  let lookup = {};
  let map = {};
  for (const char of t) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  let left = 0;
  let minimum = Infinity;
  let formed = 0;
  let needed = Object.keys(lookup).length;
  let minimumWindow = "";
  for (let right = 0; right < s.length; right++) {
    if (lookup[s[right]]) {
      map[s[right]] = (map[s[right]] || 0) + 1;
      if (map[s[right]] === lookup[s[right]]) {
        formed += 1;
      }
    }

    while (formed === needed) {
      if (right - left + 1 < minimum && formed === needed) {
        minimum = right - left + 1;
        minimumWindow = s.slice(left, right + 1);
      }
      if (map[s[left]] && lookup[s[left]]) {
        map[s[left]] -= 1;
        if (map[s[left]] < lookup[s[left]]) {
          formed--;
        }
      }

      left++;
    }
  }
  return minimumWindow;
}

// const s = "ADOBECODEBANC";
const s = "aa";
// const t = "ABC";
const t = "aa";
console.log(minWindow(s, t));
