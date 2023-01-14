
const concatTwoStrings = (arrString) => {
    let resString = "";
    arrString.forEach(str => {
        resString += str.substring(1);
    });
    return resString;
}
console.log(concatTwoStrings(["code", "academy"]));