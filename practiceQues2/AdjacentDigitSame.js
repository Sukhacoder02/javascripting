
const asciiZero = 48;

const isAdjacentDigitSame = (number) => {

  if(typeof(number) != 'number') return false;

  let lastDigit = number%10;
  while(number != 0) {
    let currDigit = number%10;
    if(currDigit !== lastDigit) {
      return false;
    }
    number = Math.floor(number/10);
  }
  return true;
};

function isAdjacentDigitSameVersion2(number) {
  if(typeof(number) != 'number') return false;

  let numString = number.toString();
  let firstDigit = numString.charCodeAt(0) - asciiZero;

  for(let index=1;index<numString.length;index++) {
    let currDigit = numString.charCodeAt(index) - asciiZero;
    if(currDigit !== firstDigit) {
      return false;
    }
  }
  return true;
}
console.log(isAdjacentDigitSame(2222));
module.exports = {isAdjacentDigitSame,isAdjacentDigitSameVersion2};