
const longestString = (strArray) => {
    let resString = '';
    strArray.forEach(str => {
        if(str.length >= resString.length)  {
            resString = str;
        }
    });
    return resString;
}
module.exports = {longestString};