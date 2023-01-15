
const {checkArmstrong ,checkPrime } =  require('./exercise.js');


test(`is  371 armstrong?`,() => {
    expect(checkArmstrong(371)).toBeTruthy();
});

test(`is 17 prime?` , () => {
    expect(checkPrime(17)).toBeTruthy();
});