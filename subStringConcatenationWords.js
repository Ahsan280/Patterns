function findSubstring(s, words) {
  if (!s || words.length === 0) return [];
  let lookup = {};
  words.forEach((element) => {
    lookup[element] = (lookup[element] || 0) + 1;
  });
  let wordSize = words[0].length;
  let wordCount = words.length;
  let indices = [];
  for (let i = 0; i < wordSize; i++) {
    let matchedWordsCount = 0;
    let left = i;
    let right = i;
    let currentMap = {};
    while (right + wordSize <= s.length) {
      const word = s.substring(right, right + wordSize);
      right += wordSize;
      if (lookup[word]) {
        currentMap[word] = (currentMap[word] || 0) + 1;
        matchedWordsCount++;

        while (currentMap[word] > lookup[word]) {
          const temp = s.substring(left, left + wordSize);
          if (currentMap[temp]) {
            currentMap[temp] -= 1;
            matchedWordsCount--;
          }
          left += wordSize;
        }
        if (matchedWordsCount === wordCount) {
          indices.push(left);
        }
      } else {
        currentMap = {};
        matchedWordsCount = 0;
        left = right;
      }
    }
  }

  return indices;
}

// const s = "barfoothefoobarman";
// const words = ["foo", "bar"];

// const s = "wordgoodgoodgoodbestword";
// const words = ["word", "good", "best", "word"];

// const s = "barfoothefoobarman";
const s = "barfoofoobarthefoobarman";
const l = "0123456789";
const words = ["bar", "foo", "the"];

console.log(findSubstring(s, words));

function findSubString2(s, words) {
  let lookup = {};
  words.forEach((word) => {
    lookup[word] = (lookup[word] || 0) + 1;
  });
  const wordSize = words[0].length;
  const wordsCount = words.length;
  const indices = [];
  for (let i = 0; i < wordSize; i++) {
    let right = i;
    let left = i;
    let matchedWordsCount = 0;
    let currentMap = {};
    for (right; right <= s.length - wordSize; right += wordSize) {
      let word = s.substring(right, right + wordSize);
      if (lookup[word]) {
        currentMap[word] = (currentMap[word] || 0) + 1;
        matchedWordsCount++;
        while (currentMap[word] > lookup[word]) {
          const leftString = s.substring(left, left + wordSize);
          currentMap[leftString]--;
          matchedWordsCount--;
          left += wordSize;
        }
        if (matchedWordsCount === wordsCount) {
          indices.push(left);
        }
      } else {
        currentMap = {};
        matchedWordsCount = 0;
        left = right + wordSize;
      }
    }
  }
  return indices;
}

console.log(findSubString2(s, words));
