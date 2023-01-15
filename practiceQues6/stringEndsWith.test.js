
const {endsWith} = require('./stringEndsWith');

describe('stringEndsWith checks if a string ends with \'Script\'',() => {
    const testCasesPass = ['JavaScript','typeScript','goScript','AppleScript'];
    test.each(testCasesPass)(
      'Check for leap Year',
      (fixture) => expect(endsWith(fixture)).toBeTruthy()  
    );
    const testCasesFail = ['Java','Angular','SwiftUI'];
    test.each(testCasesFail)(
        'Check for leap Year',
        (fixture) => expect(endsWith(fixture)).toBeFalsy()  
      );
});