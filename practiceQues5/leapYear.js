
const isLeapYear = (year) => {
    return (year%400 == 0) || (year%4 == 0 && year%100!=0);
}

isLeapYear(2100)
console.log(isLeapYear(2000))