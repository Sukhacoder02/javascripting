
const {doubleNumbers,filterAllEvenNumbers} = require('./arrayUtilities');

describe('Array Utilities',() => {

  describe('doubleNumbers', () => {
    it('Should double the numbers when argument is an array',() => {
      expect(doubleNumbers([1,2,3])).toEqual([2,4,6]);
    });

    it('Should throw an error when argument is not an array',() => {
      expect(() => {doubleNumbers('abc');}).toThrow('You must provide an array');
    }); 
  });


  describe('filterAllEvenNumbers', () => {
    it('Should first triple then filter all the even numnbers when input is an array',() => {
        expect(filterAllEvenNumbers([1,2,3,4,5])).toEqual([6,12]);
    });

    it('Should throw an error when argument is not an array',() => {
        expect(()=>{filterAllEvenNumbers('')}).toThrow('You must provide an array');
    });

    it('Should throw an error when array contains atleast one string',() => {
        expect(()=>{filterAllEvenNumbers(['a',2,4])}).toThrow('Input must be an array of integers');
    });
  });
});