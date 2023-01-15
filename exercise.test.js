
const {checkArmstrong ,checkPrime } =  require('./exercise.js');

test('is  371 armstrong?',() => {
    expect(checkArmstrong(371)).toBeTruthy();
});

test('is 7 prime?', () => {
    expect(checkPrime(7)).toBeTruthy();
});