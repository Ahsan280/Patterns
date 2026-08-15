function firstNonRepeatingCharacter(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] <= 1) {
      return s[i];
    }
  }
  return null;
}

const s = "aabbcdde";
console.log(firstNonRepeatingCharacter(s));
