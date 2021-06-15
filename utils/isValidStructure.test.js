const isValidStructure = require('./isValidStructure');
const records = require('./mock/records');

describe('isValidStructure()', () => {
  it('returns true if record is valid', () => {
    expect(isValidStructure(records.valid)).toBe(true);
  });

  it('returns false if null', () => {
    expect(isValidStructure(null)).toBe(false);
    expect(isValidStructure()).toBe(false);
  });

  it('returns false if not an array', () => {
    expect(isValidStructure({})).toBe(false);
    expect(isValidStructure(1234)).toBe(false);
    expect(isValidStructure('abcd')).toBe(false);
  });

  it('returns false if record is missing id field', () => {
    expect(isValidStructure(records.missingID)).toBe(false);
  });

  it('returns false if record is null', () => {
    expect(isValidStructure(records.nullRecord)).toBe(false);
  });

  it('returns false if record is invalid type', () => {
    expect(isValidStructure(records.invalidType)).toBe(false);
  });
});
