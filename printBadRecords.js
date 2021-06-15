const errors = require('./utils/errors');
const isValidStructure = require('./utils/isValidStructure');
const parseJSON = require('./utils/parseJSON');
const findInvalidAndDuplicates = require('./functions/findInvalidAndDuplicates');

const jsonFile = process.argv[2];
if (!jsonFile) return errors.printArgError();

const [records, error] = parseJSON(jsonFile);
if (error) return errors.printArgError();
if (!isValidStructure(records)) return errors.printStructureError();

const badRecords = findInvalidAndDuplicates(records);
badRecords.forEach((record) => console.log(record));
