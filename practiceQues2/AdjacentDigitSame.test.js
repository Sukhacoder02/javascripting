
const {isAdjacentDigitSame,isAdjacentDigitSameVersion2} = require('./AdjacentDigitSame');

describe('isAdjacentDigitSame',() => {
  test('2222222  has  all adjacent digits same', () => {
    expect(isAdjacentDigitSame(2222222)).toBeTruthy();
  });

  test('134884222 doesn\'t has all adjacent digits same',() => {
    expect(isAdjacentDigitSame(134884222)).toBeFalsy();
  });
  test('2222222  has  all adjacent digits same', () => {
    expect(isAdjacentDigitSameVersion2(2222222)).toBeTruthy();
  });

  test('134884222 doesn\'t has all adjacent digits same',() => {
    expect(isAdjacentDigitSameVersion2(134884222)).toBeFalsy();
  });
});









