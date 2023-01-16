
const doubleNumbers = (numbers) => {
    if(!Array.isArray(numbers)) {
        throw new Error('You must provide an array');
    } 
    return numbers.map((x)=>x*2);
} 

module.exports = {doubleNumbers};