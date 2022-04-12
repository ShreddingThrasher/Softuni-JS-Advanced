const lookupChar = require('./char-lookup');
const expect = require('chai').expect;

describe('lookupChar tests', () => {

    it('Returns undefined if first parameter is not string', () => {
        expect(lookupChar([1, 2, 4], 0)).to.equal(undefined);
    })

    it('Returns undefined if seconds parameter is not an integer', () => {
        expect(lookupChar('some string', 'not a number')).to.equal(undefined);
    })

    it('Returns undefined if seconds parameter is not an integer', () => {
        expect(lookupChar('some string', 5.78)).to.equal(undefined);
    })

    it('Returns undefined if any parameter is incorrect', () => {
        expect(lookupChar({name: 'John'}, -1)).to.equal(undefined);
        expect(lookupChar([5, 1, 4, 6], 5)).to.equal(undefined);
    })

    it('Returns Incorrect index if index is bigger than the string length', () => {
        expect(lookupChar('string with length of 24', 31)).to.eq('Incorrect index');
    })

    it('Returns Incorrect index if index is below zero', () => {
        expect(lookupChar('some test string', -9)).to.equal('Incorrect index');
    })

    it('Returns the correct char at given index', () => {
        expect(lookupChar('a testing string', 3)).to.equal('e');
        expect(lookupChar('a testing string', 0)).to.equal('a');
        expect(lookupChar('a testing string', 15)).to.equal('g');
    })
})