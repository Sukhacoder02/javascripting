
const {doubleNumbers} = require('./arrayUtilities');

describe('Array Utilities',() => {
    describe('doubleNumbers', () => {
        it('Should double the numbers when argument is an array',() => {
            expect(doubleNumbers([1,2,3])).toEqual([2,4,6]);
        });
        it('Should throw an error when argument is not an array',() => {
            expect(() => {doubleNumbers('abc')}).toThrow('You must provide an array');
        }); 
    });
});