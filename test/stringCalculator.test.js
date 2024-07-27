const { expect } = require('chai');
const stringCalculator = require('../stringCalculator');

describe('stringCalculator', () => {
  it('should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).to.equal(0);
  });

  it('should return 1 for "1"', () => {
    expect(stringCalculator.add("1")).to.equal(1);
  });

  it('should return 6 for "1,5"', () => {
    expect(stringCalculator.add("1,5")).to.equal(6);
  });

  it('should handle new lines between numbers', () => {
    expect(stringCalculator.add("1\n2,3")).to.equal(6);
  });

  it('should support different delimiters', () => {
    expect(stringCalculator.add("//;\n1;2")).to.equal(3);
  });

  it('should support different delimiters', () => {
    expect(stringCalculator.add("//;,1;2")).to.equal(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => stringCalculator.add("1,-2,3")).to.throw("negative numbers not allowed -2");
  });

  it('should throw an exception showing all negative numbers', () => {
    expect(() => stringCalculator.add("1,-2,-3,4")).to.throw("negative numbers not allowed -2,-3");
  });
});
