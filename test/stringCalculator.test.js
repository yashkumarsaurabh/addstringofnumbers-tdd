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
});
