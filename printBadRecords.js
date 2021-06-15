const argError = require('./utils/argError');
const parseJSON = require('./utils/parseJSON');
const findInvalidAndDuplicates = require('./functions/findInvalidAndDuplicates');

const jsonFile = process.argv[2];
if (!jsonFile) return argError();

const [records, error] = parseJSON(jsonFile);
if (error) return argError();

const badRecords = findInvalidAndDuplicates(records);
badRecords.forEach((record) => console.log(record));
console.log(`\nTotal number of invalid or duplicate records: ${badRecords.size}`);
