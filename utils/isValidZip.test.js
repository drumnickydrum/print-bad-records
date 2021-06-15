const isValidZip = require('./isValidZip');

describe('isValidZip()', () => {
  describe('type: String', () => {
    it('returns true if valid', () => {
      let valid = isValidZip('12345');
      expect(valid).toBe(true);

      valid = isValidZip('12345-7890');
      expect(valid).toBe(true);
    });

    it('returns false if includes non-digits (except hyphen)', () => {
      let valid = isValidZip('1234e');
      expect(valid).toBe(false);

      valid = isValidZip('abcde');
      expect(valid).toBe(false);
    });

    it('returns false if length < 5', () => {
      let valid = isValidZip('1');
      expect(valid).toBe(false);

      valid = isValidZip('');
      expect(valid).toBe(false);
    });

    it('returns false if length > 5 and not hyphenated', () => {
      let valid = isValidZip('123456');
      expect(valid).toBe(false);

      valid = isValidZip('1 2 3 4 5 ');
      expect(valid).toBe(false);
    });

    it('returns false if hyphenated and length !== 10', () => {
      let valid = isValidZip('12345-');
      expect(valid).toBe(false);

      valid = isValidZip('12345-7');
      expect(valid).toBe(false);

      valid = isValidZip('12345-78901');
      expect(valid).toBe(false);

      valid = isValidZip('1 2 3 4 5-');
      expect(valid).toBe(false);
    });
  });

  describe('type: Number', () => {
    it('returns true if valid', () => {
      let valid = isValidZip(12345);
      expect(valid).toBe(true);
    });

    it('returns false invalid length', () => {
      let valid = isValidZip(1);
      expect(valid).toBe(false);

      valid = isValidZip(123456);
      expect(valid).toBe(false);
    });

    it('accepts valid length', () => {
      let valid = isValidZip(12345);
      expect(valid).toBe(true);
    });
  });

  describe('type: !Number && !String', () => {
    it('returns false', () => {
      let valid = isValidZip();
      expect(valid).toBe(false);

      valid = isValidZip(undefined);
      expect(valid).toBe(false);

      valid = isValidZip(null);
      expect(valid).toBe(false);

      valid = isValidZip({});
      expect(valid).toBe(false);

      valid = isValidZip([]);
      expect(valid).toBe(false);

      valid = isValidZip(true);
      expect(valid).toBe(false);

      valid = isValidZip(() => {});
      expect(valid).toBe(false);
    });
  });
});
