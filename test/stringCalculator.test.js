const { expect } = require('chai');
const stringCalculator = require('../stringCalculator');

describe('stringCalculator', () => {
  it('should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).to.equal(0);
  });
});