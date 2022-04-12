const mathEnforcer = require('./math-enforcer');
const expect = require('chai').expect;

describe('Math Enforcer tests', () => {

    it('addFive returns undefined if the parameter is not a number', () => {
        expect(mathEnforcer.addFive('string')).to.equal(undefined);
        expect(mathEnforcer.addFive([1, 2, 3, 4])).to.equal(undefined);
        expect(mathEnforcer.addFive({name: 'I am not a number'})).to.equal(undefined);
    })

    it('addFive adds 5 to a positive number', () => {
        expect(mathEnforcer.addFive(19)).to.equal(19 + 5);
    })

    it('addFive adds 5 to a negative number', () => {
        expect(mathEnforcer.addFive(-7)).to.equal(-2);
    })

    it('addFive adds 5 to a floating point number', () => {
        expect(mathEnforcer.addFive(5.22)).to.equal(5.22 + 5);
    })

    it('SubtractTen returns undefined if the parameter is not a number', () => {
        expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
        expect(mathEnforcer.subtractTen([1, 2, 3, 4])).to.equal(undefined);
        expect(mathEnforcer.subtractTen({name: 'I am not a number'})).to.equal(undefined);
    })

    it('subtractTen subtracts 10 from a positive number', () => {
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
    })

    it('subtractTen subtracts 10 from a negative number', () => {
        expect(mathEnforcer.subtractTen(-12)).to.equal(-22);
    })

    it('subtractTen subtracts 10 from a floating point number', () => {
        expect(mathEnforcer.subtractTen(13.70)).to.equal(13.70 - 10);
    })

    it('Sum returns undefined if any of the two paramers is not a number', () => {
        expect(mathEnforcer.sum('not a number', 90)).to.equal(undefined);
        expect(mathEnforcer.sum(23, {model: 'Ford'})).to.equal(undefined);
        expect(mathEnforcer.sum('some string', ['some', 'array'])).to.equal(undefined);
    })

    it('Sum sums the two numbers correctly', () => {
        expect(mathEnforcer.sum(20, -5)).to.equal(15);
        expect(mathEnforcer.sum(-30, -14)).to.equal(-44);
        expect(mathEnforcer.sum(-15, 30)).to.equal(15);
        expect(mathEnforcer.sum(2, 7)).to.equal(9);
    })

    it('Sum works correctly with floating point numbers', () => {
        expect(mathEnforcer.sum(20.21, -5.54)).to.equal(20.21 + -5.54);
        expect(mathEnforcer.sum(23, 8.78)).to.equal(23 + 8.78);
        expect(mathEnforcer.sum(6.73, 17)).to.equal(6.73 + 17);
    })
})