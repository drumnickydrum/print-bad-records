module.exports.valid = [
  { id: 'valid', name: 'John Valid Smith', address: '123 Cherry Lane', zip: '90210' },
  { id: 'valid2', name: 'Jane Valid Doe', address: '456 Main St', zip: '90210' },
  { id: 'nameBlank', name: '', address: '123 Cherry Lane', zip: '90210' },
  { id: 'nameNull', name: null, address: '123 Cherry Lane', zip: '90210' },
  { id: 'nameNone', address: '123 Cherry Lane', zip: '90210' },
  { id: 'addressBlank', name: 'Susan', address: '', zip: '90210' },
  { id: 'addressNull', name: 'Beatrice', address: null, zip: '90210' },
  { id: 'addressNone', name: 'Kiddo', zip: '90210' },
  { id: 'zipBlank', name: 'Melissa', address: '123 Cherry Lane', zip: '' },
  { id: 'zipNull', name: 'Frank', address: '123 Cherry Lane', zip: null },
  { id: 'zipNone', name: 'Tim', address: '123 Cherry Lane' },
  { id: 'invalidZip1', name: 'Satya', address: '123 Cherry Lane', zip: 'abcde' },
  { id: 'invalidZip2', name: 'Andrea', address: '123 Cherry Lane', zip: '9021' },
  { id: 'invalidZip3', name: 'Nick', address: '123 Cherry Lane', zip: '902109' },
  { id: 'duplicate1', name: 'Wayne', address: '123 Cherry Lane', zip: '90210' },
  { id: 'duplicate2', name: 'Wayne', address: '123 Cherry Lane', zip: '90210' },
];

module.exports.missingID = [
  { id: 'valid', name: 'John Valid Smith', address: '123 Cherry Lane', zip: '90210' },
  { name: 'Invalid Smith', address: '123 Cherry Lane', zip: '90210' },
  { id: 'valid2', name: 'Jane Valid Doe', address: '456 Main St', zip: '90210' },
];

module.exports.nullRecord = [
  { id: 'valid', name: 'John Valid Smith', address: '123 Cherry Lane', zip: '90210' },
  {},
  { id: 'valid2', name: 'Jane Valid Doe', address: '456 Main St', zip: '90210' },
];

module.exports.invalidType = [
  { id: 'valid', name: 'John Valid Smith', address: '123 Cherry Lane', zip: '90210' },
  '12345',
  { id: 'valid2', name: 'Jane Valid Doe', address: '456 Main St', zip: '90210' },
];
