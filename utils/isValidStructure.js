module.exports = function (records) {
  if (!records) return false;
  if (!Array.isArray(records)) return false;
  for (let record of records) {
    if (!record) return false;
    if (Object.getPrototypeOf(record) !== Object.prototype) return false;
    if (!record.id) return false;
  }
  return true;
};
