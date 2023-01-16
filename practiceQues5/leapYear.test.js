
const {isLeapYear} = require('./leapYear');

describe('isLeapYear checks for a year to be leap',() => {
  const testCasesPass = [2000,2004,2008,2012];
  test.each(testCasesPass)(
    'Check for leap Year',
    (fixture) => expect(isLeapYear(fixture)).toBeTruthy()  
  );
  const testCasesFail = [2001,2005,2009,2014];
  test.each(testCasesFail)(
    'Check for leap Year',
    (fixture) => expect(isLeapYear(fixture)).toBeFalsy()  
  );
});