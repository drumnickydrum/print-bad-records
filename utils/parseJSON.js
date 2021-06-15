const fs = require('fs');

module.exports = function (jsonFile) {
  let json, error;
  try {
    json = JSON.parse(fs.readFileSync('./' + jsonFile));
  } catch (e) {
    error = e;
  }
  return [json, error];
};
