const PaymentPackage = require('./payment-package');
const expect = require('chai').expect;

describe('PaymentPackage unit tests', () => {

    it('Should throw error when name is not a string or empty string', () => {
        expect(() => {new PaymentPackage([1, 2, 3], 20)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage('', 20)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage({}, 20)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage(false, 20)}).to.throw('Name must be a non-empty string')
        expect(() => {new PaymentPackage(12, 20)}).to.throw('Name must be a non-empty string')
    })

    it('Should throw error when value is not a number or negative number', () => {
        expect(() => {new PaymentPackage('Valid Name', {})}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Valid Name', [])}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Valid Name', true)}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Valid Name', '1234')}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Valid Name', 'not a number')}).to.throw('Value must be a non-negative number');
    })

    it('Should instantiate object when the input is valid', () => {
        const pp = new PaymentPackage('Valid Name', 30);
        expect(pp._name).to.equal('Valid Name');
        expect(pp._value).to.equal(30);
        expect(pp._VAT).to.equal(20);
        expect(pp._active).to.be.true;
    })

    it('name should return the package name', () => {
        const pp = new PaymentPackage('valid name', 560);
        expect(pp.name).to.equal('valid name');
    })

    it('name should set the value if the input is correct', () => {
        const pp = new PaymentPackage('valid name', 30);
        pp.name = 'new name';
        expect(pp.name).to.equal('new name');
    })

    it('name should throw error if the the value is invalid', () => {
        const pp = new PaymentPackage('valid name', 30);
        expect(() => pp.name = ['invalid', 'name']).to.throw('Name must be a non-empty string');
    })

    it('VAT should return the VAT of the package', () => {
        const pp = new PaymentPackage('valid name', 560);
        expect(pp.VAT).to.equal(20);
    })

    it('VAT should set VAAT if the value is valid', () => {
        const pp = new PaymentPackage('valid name', 560);
        pp.VAT = 30;
        expect(pp.VAT).to.equal(30);
    })

    it('VAT should throw error if value is invalid', () => {
        const pp = new PaymentPackage('valid name', 560);
        expect(() => pp.VAT = 'non number').to.throw('VAT must be a non-negative number');
        expect(() => pp.VAT = -12).to.throw('VAT must be a non-negative number');
    })

    it('Active should set correctly', () => {
        const pp = new PaymentPackage('valid name', 560);
        pp.active = false;
        expect(pp.active).to.be.false;
    })

    it('Active should get active property', () => {
        const pp = new PaymentPackage('valid name', 560);
        expect(pp.active).to.be.true;
        pp.active = false;
        expect(pp.active).to.be.false;
    })

    it('Active should throw error if value is not bool', () => {
        const pp = new PaymentPackage('valid name', 560);
        expect(() => pp.active = 'i am not boolean').to.throw('Active status must be a boolean');
        expect(() => pp.active = []).to.throw('Active status must be a boolean');
        expect(() => pp.active = {}).to.throw('Active status must be a boolean');
    })

    it('ToString should give a correct string representation of active object', () => {
        const pp = new PaymentPackage('valid name', 560);

        expect(pp.toString())
        .to
        .equal('Package: valid name\n- Value (excl. VAT): 560\n- Value (VAT 20%): 672');
    })

    it('ToString should give a correct string representation of inactive object', () => {
        const pp = new PaymentPackage('valid name', 560);
        pp.active = false;
        expect(pp.toString())
        .to
        .equal('Package: valid name (inactive)\n- Value (excl. VAT): 560\n- Value (VAT 20%): 672');
    })

    it('ToString should give a correct string representation if VAT is 0', () => {
        const pp = new PaymentPackage('valid name', 560);
        pp.VAT = 0;
        expect(pp.toString())
        .to
        .equal('Package: valid name\n- Value (excl. VAT): 560\n- Value (VAT 0%): 560');
    })

    it('ToString should give a correct string representation if value is 0', () => {
        const pp = new PaymentPackage('valid name', 0);
        expect(pp.toString())
        .to
        .equal('Package: valid name\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0');
    })
})