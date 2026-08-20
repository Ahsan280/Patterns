function canConstruct(ransomNote, magazine) {
  let magazineMap = {};

  for (let i = 0; i < magazine.length; i++) {
    magazineMap[magazine[i]] = (magazineMap[magazine[i]] || 0) + 1;
  }
  for (const ransom of ransomNote) {
    if (!magazineMap[ransom]) {
      return false;
    }
    magazineMap[ransom] -= 1;
  }
  return true;
}

// const ransomNote = "aa";
// const ransomNote = "a";
const ransomNote = "bg";
// const magazine = "ab";
const magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
// const magazine = "b";

console.log(canConstruct(ransomNote, magazine));
