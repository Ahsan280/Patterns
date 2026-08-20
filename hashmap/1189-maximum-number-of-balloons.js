function maxNumberOfBalloons(text) {
  const TARGET = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };
  let map = {};
  for (let i = 0; i < text.length; i++) {
    map[text[i]] = (map[text[i]] || 0) + 1;
  }
  let min = Infinity;
  for (const key of Object.keys(TARGET)) {
    if (key in map) {
      min = Math.min(Math.floor(map[key] / TARGET[key]), min);
    } else {
      return 0;
    }
  }
  return min;
}

const text = "loobalxballpoo";
console.log(maxNumberOfBalloons(text));
