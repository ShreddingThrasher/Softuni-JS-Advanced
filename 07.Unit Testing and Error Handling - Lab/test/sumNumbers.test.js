const sum = require('./sumNumbers.js');
const { expect } = require('chai');

describe('Tests for sum', () => {

    it('Should return correct sum', () => {

        expect(sum([1,2,3])).to.equal(6);
    })
})