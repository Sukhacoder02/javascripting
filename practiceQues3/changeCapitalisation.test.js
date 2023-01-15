
const {toggleCapitalisation} = require('./changeCapitalisation');

describe('Capitalisation Toggler',() => {
    const testCases = [['MeRRy hAD a LITTle lAMp','mErrY Had A littLE LamP'],['mErrY Had A littLE LamP','MeRRy hAD a LITTle lAMp']];
    test.each(testCases)(
        'Capitalisation toggler does:',
        (fixture,result) => expect(toggleCapitalisation(fixture)).toBe(result)
    );
});