
const isAdjacentDigitSame = (number) => {
    let lastDigit = number%10;
    while(number != 0) {
        let currDigit = number%10;
        if(currDigit !== lastDigit) {
            return false;
        }
        number = Math.floor(number/10);
    }
    return true;
}
const asciiZero = 48;
function isAdjacentDigitSameVersion2(number) {
    let numString = number.toString();
    let firstDigit = numString.charCodeAt(0) - asciiZero;
    for(let index=1;index<numString.length;index++) {
        let currDigit = numString.charCodeAt(index) - asciiZero;
        if(currDigit != firstDigit) {
            return false;
        }
    }
    return true;
}

module.exports = {isAdjacentDigitSame,isAdjacentDigitSameVersion2};