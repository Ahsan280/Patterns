function isValid(s) {
  // An odd length string can never be balanced
  if (s.length % 2 !== 0) return false;
  const closingBracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };

  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (closingBracketMap[s[i]]) {
      const top = stack.pop();
      if (top !== closingBracketMap[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}
const s = "()[]{}";
// const s = "((";
// const s = "([])";
// const s = "([)]";
console.log(isValid(s));
