
function getNextChar(char) {
    return (String.fromCharCode((char.charCodeAt(0) - 96)%26 + 97));
}

const replaceWithNextChar = (string) => {
    let resString = "";
    [...string].forEach(char => {
        resString += getNextChar(char);
    });
    return resString;
}
console.log(replaceWithNextChar("lazyinterns") == "mbazjoufsot");