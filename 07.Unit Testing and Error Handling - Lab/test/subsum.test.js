
const subSum = require('./sub-sum');
const assert = require('assert').strict;

describe('Sub-sum Calculator', () => {

    it('Should return subSum when endIndex is larger than the array length', () => {
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50 , 60];
        let startIndex = 3;
        let endIndex = 300;
    
        let actualSum = subSum(numbers, startIndex, endIndex);
    
        assert.equal(actualSum, expectedSum);
    });
    
    it('Should return subSum when startIndex is below zero', () => {
        let expectedSum = 10;
        let numbers = [1, 2, 3, 4];
        let startIndex = -17;
        let endIndex = 3;
        let actualSum = subSum(numbers, startIndex, endIndex);
    
        assert.equal(actualSum, expectedSum);
    })
    
    it('Should return correct sum', () => {
        let expectedSum = 5;
        let numbers = [1, 3, 4, 1, 7, 2];
        let startIndex = 2;
        let endIndex = 3;
        let actualSum = subSum(numbers, startIndex, endIndex);
    
        assert.equal(actualSum, expectedSum);
    })
})
