
const {largestEven,largestEvenVersion2} = require('./largestEvenNumber');

test('[1,2,3,4,5] has 4 as largest even number',() => {
  expect(largestEven([1,2,3,4,5])).toBe(4);
});

test('[1481,32158913,182,48102,12,1000000000] has 1000000000 as largest even number',() => {
  expect(largestEvenVersion2([1481,32158913,182,48102,12,1000000000])).toBe(1000000000);
}); 