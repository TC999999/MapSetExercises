//Exercise 1: hasDuplicate
const hasDuplicate = (arr) =>
  [...new Set(arr)].length !== arr.length ? true : false;

//Exercise 2: vowelCount
const vowelCount = (str) => {
  const vowelMap = new Map();
  [...str.toLowerCase()].forEach((letter) => {
    let total = 0;
    if (vowelMap.has(letter)) {
      total = vowelMap.get(letter);
    }
    if ("aeiou".includes(letter)) {
      total++;
      vowelMap.set(letter, total);
    }
  });
  return vowelMap;
};
