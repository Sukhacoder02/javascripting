
function getNextChar(char) {
  return (String.fromCharCode((char.charCodeAt(0) - 96)%26 + 97));
}

const replaceWithNextChar = (string) => {
  if(typeof(string) !== 'string') {
    return -1;
  }
  return [...string].map((ch)=>getNextChar(ch)).join('');
  // return resString;

};
console.log(replaceWithNextChar(554466));