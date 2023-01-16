
const getLongestStringVersion2 = (strArray) => {
  let resString = '';
  strArray.forEach(str => {
    if(str.length >= resString.length)  {
      resString = str;
    }
  });
  return resString;
};
function getLongestString(strArray) {
  let resString = '';
  if(!Array.isArray(strArray))  {
    return resString;
  }
  strArray.forEach(str => {
    resString = str.length > resString.length ? str : str.length == resString.length ? (str.localeCompare(resString) == -1 ? str : resString) : resString;
  });
  return  resString;
}
console.log(getLongestString(['abc','def','aabc']));
module.exports = {getLongestStringVersion2,getLongestString};