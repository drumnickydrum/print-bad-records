module.exports = function (zip) {
  if (!zip) return false;
  if (typeof zip !== 'number' && typeof zip !== 'string') return false;

  zip = zip.toString();
  const len = zip.length;

  if (zip.match(/[^\d-]/)) return false;
  if (len < 5) return false;
  if (len > 5) {
    if (zip.match('-')) {
      if (len !== 10) return false;
      else return true;
    } else {
      return false;
    }
  }
  return true;
};
