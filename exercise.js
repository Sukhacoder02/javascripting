
function checkAmstrong(number) {
    let numString = number.toString();
    let total = 0;
    for(var i=0;i<numString.length;i++) {
        total += (numString.charCodeAt(i) - 48)**3;
    }
    console.log(total === number);
}

function checkAmstrongAnotherVersion(number) {
    let savedNum = number;
    let total = 0;
    while(number != 0) {
        total += (number%10)**3;
        number =  Math.floor(number/10);
    }
    return savedNum === total;
}

function checkPrime(number) {
    for(var i=2;i*i<number;i++) {
        if(number%i === 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrime(19));