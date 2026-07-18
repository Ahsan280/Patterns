function nextNumber(n) {
  const length = n.toString().length;
  if (length <= 1) {
    return n ** 2;
  }
  const digits = Array.from(String(n), Number);
  let sum = 0;
  digits.forEach((digit) => {
    sum += digit ** 2;
  });
  return sum;
}

function isHappy(n) {
  let fast = n;
  let slow = n;
  while (fast!==1) {
    slow = nextNumber(slow);
    fast = nextNumber(fast);
    fast = nextNumber(fast);
    if (slow === fast && slow !== 1) {
      return false;
    }
  }
  return true
}

const n = 2;
console.log(isHappy(n));
