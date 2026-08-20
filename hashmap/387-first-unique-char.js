function firstUniqChar(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]].count += 1;
    } else {
      map[s[i]] = { index: i, count: 1 };
    }
  }
  for (const key of Object.keys(map)) {
    if (map[key].count === 1) {
      return map[key].index;
    }
  }
  return -1;
}
// const s = "leetcode";
const s = "loveleetcode";
console.log(firstUniqChar(s));
