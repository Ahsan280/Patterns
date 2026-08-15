function dailyTemperatures(temperatures) {
  const stack = [temperatures.length - 1];
  const result = [0];

  for (let i = temperatures.length - 2; i >= 0; i--) {
    while (
      temperatures[stack[stack.length - 1]] <= temperatures[i] &&
      stack.length > 0
    ) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(0);
    } else {
      result.push(stack[stack.length - 1] - i);
    }
    stack.push(i);
  }
  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// const temperatures = [30, 40, 50, 60];
// const temperatures = [30, 60, 90];
console.log(dailyTemperatures(temperatures));
