# Print Bad Records

By Nick Carbone | drumnickydrum@gmail.com

## Description

This application checks for the validity of records inside a JSON file. It considers a record invalid if either of the following conditions are met:

- It is a duplicate of another record
- The name field is null, missing, or blank
- The address field is null, missing, or blank
- The zip field is null, missing, or an invalid U.S. zipcode

For the purposes of this application, an invalid zipcode doesn't match the following formats:

1. 12345
2. 12345-1234

Note: ID collisions are not currently being checked.

## Installation & Execution

1. Install [Node.js](https://nodejs.org)
2. Download or clone this repo
3. From the repo's path, open a CLI and enter:

```bash
node printBadRecords.js data.json
```

A complete list of invalid and duplicate entries inside `data.json` will be printed to the console.

## Testing

1. Follow previous steps to install Node and Download/Clone this repo
2. From the same path, install [Jest](https://jestjs.io) as a dev dependency with:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

To configure Jest, edit test script inside `package.json`.
