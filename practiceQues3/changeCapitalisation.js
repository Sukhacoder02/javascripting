

function isUpperCase(ascii) {
  return ascii >= 65 && ascii <= 65+26-1;
}
function isLowerCase(ascii) {
  return ascii >= 97 && ascii <= 97+26-1;
}
const toggleCapitalisation = (str) => {
  let resString = '';
  [...str].forEach((char) => {
    let currAscii = char.charCodeAt(0);
    if(isUpperCase(currAscii)) {
      resString += String.fromCharCode(currAscii+32);
    } else if(isLowerCase(currAscii)){
      resString += String.fromCharCode(currAscii-32);
    } else if(char === ' ') {
      resString += char;
    }
  });
  return resString;
};

module.exports = {toggleCapitalisation};

