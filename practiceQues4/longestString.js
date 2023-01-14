
const longestString = (strArray) => {
    let resString = '';
    strArray.forEach(str => {
        if(str.length >= resString.length)  {
            resString = str;
        }
    });
    return resString;
}
console.log(longestString(["we", "love", "code", "academy"]));