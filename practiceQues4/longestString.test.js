
const {longestString} = require('./longestString');


['we', 'love', 'code', 'academy'];
describe('longestString',() => {
  const testCase = [
    [['we', 'love', 'code', 'academy'],'academy'],
    [['we','interns','are','lazy'],'interns'],
    [['beautiful','is','the','weather','bengaluru'],'bengaluru']
  ];
  test.each(testCase)(
    'longestString finds longest string in the array',
    (fixture,result) => {expect(longestString(fixture)).toBe(result);}
  );  
});