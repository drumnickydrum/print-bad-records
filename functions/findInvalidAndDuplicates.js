const isValidZip = require('../utils/isValidZip');

module.exports = function (records) {
  const names = new Map();
  const badRecords = new Set();
  for (let record of records) {
    if (!record.name || !record.address || !isValidZip(record.zip)) {
      badRecords.add(record.id);
    } else {
      const dupeName = names.get(record.name);
      if (dupeName && dupeName.address === record.address) {
        badRecords.add(record.id).add(dupeName.id);
      } else {
        names.set(record.name, record);
      }
    }
  }
  return badRecords;
};
