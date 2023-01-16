
const doubleNumbers = (numbers) => {
  if(!Array.isArray(numbers)) {
    throw new Error('You must provide an array');
  } 
  return numbers.map((x)=>x*2);
}; 


const filterAllEvenNumbers = (numbers) => {
    if(!Array.isArray(numbers)) {
        throw new Error('You must provide an array');
    } 
    if(numbers.some((number) => typeof(number) === 'string')) {
        throw new Error('Input must be an array of integers');
    }
    return numbers.map((x)=>x*3).filter((x) => x%2==0);
}

// console.log(filterAllEvenNumbers(['a',2,3,4]));
module.exports = {doubleNumbers,filterAllEvenNumbers};