
const {endsWith} = require('./stringEndsWith');

describe('stringEndsWith checks if a string ends with \'Script\'',() => {
  const testCasesPass = ['JavaScript','typeScript','goScript','AppleScript'];
  test.each(testCasesPass)(
    'Checking if these testcases pass',
    (fixture) => expect(endsWith(fixture)).toBeTruthy()  
  );
  const testCasesFail = ['Java','Angular','SwiftUI'];
  test.each(testCasesFail)(
    'Checking if these testcases pass',
    (fixture) => expect(endsWith(fixture)).toBeFalsy()  
  );
});
