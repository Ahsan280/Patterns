class Stack {
  constructor(array = []) {
    this.stack = array;
  }
  push(element) {
    if (!element) {
      return;
    }
    this.stack.push(element);
    return this.stack;
  }
  pop() {
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  empty() {
    return this.stack.length === 0;
  }
}

export { Stack };
