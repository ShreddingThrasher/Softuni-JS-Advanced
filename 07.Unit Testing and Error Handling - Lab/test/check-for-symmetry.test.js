const isSymmetric = require('./check-for-symmetry');
const assert = require('assert');

describe('Tests for IsSymmetric', () => {

    it('Returns false if the parameter is not array', () => {
        let expected = false;
        let notArray = 'a string';
        let actual = isSymmetric(notArray);

        assert.equal(actual, expected);
    })

    it('Returns false if a number array is not symmetric', () => {
        let nonSymmetricArray = [1, 2, 3, 4, 5];
        let expected = false;
        let actual = isSymmetric(nonSymmetricArray);

        assert.equal(actual, expected);
    })

    it('Returns false if a string array is not symmetric', () => {

        let nonSymmetricArray = ['1', '2', '3', '4', '5'];
        let expected = false;
        let actual = isSymmetric(nonSymmetricArray);

        assert.equal(actual, expected);
    })

    it('Returns true when a numbers array is symmetric', () => {

        let symmetricArray = [1, 2, 3, 3, 2, 1];
        let expected = true;
        let actual = isSymmetric(symmetricArray);

        assert.equal(actual, expected);
    })

    it('Returns true when a string array is symmetric', () => {

        let symmetricArray = ['1', '2', '3', '3', '2', '1'];
        let expected = true;
        let actual = isSymmetric(symmetricArray);

        assert.equal(actual, expected);
    })

    it('Returns false if the array is symmetric, but with different value types', () => {

        let arr = [1, 2, 3, '3', '2', '1'];
        let expected = false;
        let actual = isSymmetric(arr);

        assert.equal(actual, expected);
    })
})