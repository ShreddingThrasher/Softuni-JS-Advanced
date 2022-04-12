const isOddOrEven = require('./even-or-odd');
const expect = require('chai').expect;

describe('IsOddOrEven tests', () => {

    it('Returns undefined if a number is passed', () => {
        expect(isOddOrEven(9)).to.equal(undefined);
    })

    it('Returns undefined if an object is passed', () => {
        expect(isOddOrEven({name: 'John'})).to.equal(undefined);
    })

    it('Returns undefined if an array is passed', () => {
        expect(isOddOrEven([1, 2, 3, 4])).to.equal(undefined);
    })

    it('Should return odd if the string length is odd', () => {
        expect(isOddOrEven('some string with odd length')).to.equal('odd');
    })

    it('Should return even if the string length is even', () => {
        expect(isOddOrEven('some even length stringy')).to.equal('even');
    })
})