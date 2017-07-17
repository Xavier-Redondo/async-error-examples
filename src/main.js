const commandLineArgs = require('command-line-args')

const { processCallback } = require('./process-callback');
const { processAsyncLib } = require('./process-async-lib');

const optionDefinitions = [ 
  { name: 'method', alias: 'm', type: String, defaultValue: 'callback' },
  { name: 'list', alias: 'l', type: String, multiple: true, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

console.log('starting with options', options);

if (options.method === 'callback') {
  options.list ? processCallback(options.list) : null;
}
else if (options.method === 'asyncLib') {
  options.list ? processAsyncLib(options.list) : null;
}




