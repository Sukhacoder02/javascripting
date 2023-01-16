
const getLargestEven = (array) => {
  if(!Array.isArray(array))  {
    return -1;
  }
  const res = Math.max(...(array.filter((item)=>item%2===0)));
  return res === -Infinity ? -1 : res;
};

function getLargestEvenVersion2(array) {
  let max=-1;
  array.forEach(element => {
    if((element%2) === 0 && element > max) {
      max = element;
    }
  });
  return max;
}

module.exports = {getLargestEven,getLargestEvenVersion2};
