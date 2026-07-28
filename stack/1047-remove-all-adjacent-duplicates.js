function removeDuplicates(s) {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

// let s = "abbaca";
let s = "azxxzy";
console.log(removeDuplicates(s));
