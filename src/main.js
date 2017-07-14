const commandLineArgs = require('command-line-args')

const { processCallback } = require('./process-callback');

const optionDefinitions = [ 
  { name: 'list', alias: 'l', type: String, multiple: true, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

if (options && options.list) {
  processCallback(options.list);
}



