
const createCalculator = require('./add-subtract.js');
const expect = require('chai').expect;

let calc = createCalculator();

calc.add(9);
calc.subtract('asdfasdfa');
console.log(calc.get());

describe('Create Calculator tests', () => {

    it('Should return an object', () => {
        expect(typeof createCalculator()).to.equal('object');
    })

    it('The object should have add property', () => {
        expect(createCalculator()).haveOwnProperty('add');
    })

    it('The object should have subtract property', () => {
        expect(createCalculator()).haveOwnProperty('subtract');
    })

    it('The object should have get property', () => {
        expect(createCalculator()).haveOwnProperty('get');
    })

    it('Gets the internal value', () => {
        //start with 0 value
        const calculator = createCalculator();

        //add 7 to the value
        calculator.add(7);

        //check
        expect(calculator.get()).to.equal(7);
    })

    it('Adds works correct when passed a number', () => {
        //start with 0 value
        const calculator = createCalculator();

        //add 7 to the value
        calculator.add(7);

        //add 19
        calculator.add(19);

        //check
        expect(calculator.get()).to.equal(7 + 19);
    })

    it('Add works correct when passed a string with a number', () => {
        //start with 0 value
        const calculator = createCalculator();

        //add 7 to the value
        calculator.add(7);

        //add 19 as a string
        calculator.add('19');
        //check
        expect(calculator.get()).to.equal(7 + 19);
    })

    it('returns not a number(NaN) when adding a non-number string', () => {
        //start with 0 value
        const calculator = createCalculator();
    
        //trying to add Heavy Metal
        calculator.add('Heavy Metal');
    
        //add doesn't like heavy metal...
        expect(Number.isNaN(calculator.get())).to.be.true;
    })

    it('Subtract works correct when passed a number', () => {
        //start with 0 value
        const calculator = createCalculator();

        //add 9
        calculator.add(9)

        //subtract 20
        calculator.subtract(20);

        expect(calculator.get()).to.equal(9 - 20);
    })

    it('Subtract works correct when passed a number string', () => {
        //start with 0 value
        const calculator = createCalculator();

        //add 9
        calculator.add(9)

        //subtract 20
        calculator.subtract('20');

        expect(calculator.get()).to.equal(9 - 20);
    })

    it('Subtract returns NaN when passed a non-number string', () => {
        //start with 0 value
        const calculator = createCalculator();

        //add 9
        calculator.add(9)

        //trying to subtract Nan bringer
        calculator.subtract('NaN bringer');

        console.log(calculator.get());

        expect(Number.isNaN(calculator.get())).to.be.true;
    })
})