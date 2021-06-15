const findInvalidAndDuplicates = require('./findInvalidAndDuplicates');
const records = require('./mock/records');

describe('findInvalidAndDuplicates()', () => {
  const badRecords = findInvalidAndDuplicates(records);
  describe('valid records', () => {
    it("doesn't return valid records", () => {
      expect(badRecords.has('valid')).toBe(false);
      expect(badRecords.has('valid2')).toBe(false);
    });
  });

  describe('invalid name', () => {
    it('returns id of record with an invalid name', () => {
      expect(badRecords.has('nameBlank')).toBe(true);
      expect(badRecords.has('nameNull')).toBe(true);
      expect(badRecords.has('nameNone')).toBe(true);
    });
  });

  describe('invalid address', () => {
    it('returns id of record with an invalid address', () => {
      expect(badRecords.has('addressBlank')).toBe(true);
      expect(badRecords.has('addressNull')).toBe(true);
      expect(badRecords.has('addressNone')).toBe(true);
    });
  });

  describe('invalid Zip', () => {
    it('returns id of record with an invalid zip', () => {
      expect(badRecords.has('zipBlank')).toBe(true);
      expect(badRecords.has('zipNull')).toBe(true);
      expect(badRecords.has('zipNone')).toBe(true);
      expect(badRecords.has('invalidZip1')).toBe(true);
      expect(badRecords.has('invalidZip2')).toBe(true);
      expect(badRecords.has('invalidZip3')).toBe(true);
    });
  });

  describe('duplicate records', () => {
    it('returns ids of both duplicate records', () => {
      expect(badRecords.has('duplicate1')).toBe(true);
      expect(badRecords.has('duplicate2')).toBe(true);
    });
  });
});
