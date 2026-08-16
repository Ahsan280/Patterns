function removeDuplicates(s, k) {
  const stack = [{ value: s[0], count: 1 }];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1]?.value === s[i]) {
      if (stack[stack.length - 1].count === k - 1) {
        stack.pop();
      } else {
        stack[stack.length - 1].count += 1;
      }
    } else {
      stack.push({ value: s[i], count: 1 });
    }
  }
  return stack.map((item) => item.value.repeat(item.count)).join("");
}
const s = "deeedbbcccbdaa";
const k = 3;
// const s = "abcd";
// const k = 2;
console.log(removeDuplicates(s, k));
