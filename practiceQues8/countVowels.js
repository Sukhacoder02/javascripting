
function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}
const countVowels = (string) => {
  let count = 0;
  [...string].forEach((char) => count += isVowel(char) ? 1 : 0);
  return count;
};

console.log(countVowels('abcdefghijklmnopqrstuvxyz'));