const rgbToHexColor = require('./rgb-to-hex');
const expect = require('chai').expect;

describe('Tests for rgbToHexColor function', () => {

    it('Should return undefined if a parameter is not an integer', () => {
        expect(rgbToHexColor('1', 2, 3)).to.equal(undefined);
        expect(rgbToHexColor(1, '2', 3)).to.equal(undefined);
        expect(rgbToHexColor(1, 2, '3')).to.equal(undefined);
    })

    it('Should return undefined if a number is negative', () => {
        expect(rgbToHexColor(-20, 2, 3)).to.equal(undefined);
        expect(rgbToHexColor(2, -11, 3)).to.equal(undefined);
        expect(rgbToHexColor(20, 2, -4)).to.equal(undefined);
    })

    it('Should return undefined if a number is larger than 255', () => {
        expect(rgbToHexColor(260, 2, 3)).to.equal(undefined);
        expect(rgbToHexColor(9, 2, 256)).to.equal(undefined);
        expect(rgbToHexColor(23, 18, 471)).to.equal(undefined);
    })

    it('Should return correct result if the parameters are correct', () => {
        expect(rgbToHexColor(54, 54, 121)).to.equal('#363679');
        expect(rgbToHexColor(250, 72, 28)).to.equal('#FA481C');
        expect(rgbToHexColor(183, 191, 132)).to.equal('#B7BF84');

        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    })
})