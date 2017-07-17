const commandLineArgs = require('command-line-args')

const { processCallback } = require('./process-callback');
const { processAsyncLib } = require('./process-async-lib');
const { processPromises } = require('./process-promises');
const { processAsyncAwait } = require('./process-async-await');

const methods = {
  callback: processCallback,
  asyncLib: processAsyncLib,
  promises: processPromises,
  asyncAwait: processAsyncAwait
};

const optionDefinitions = [ 
  { name: 'method', alias: 'm', type: String, defaultValue: 'callback' },
  { name: 'list', alias: 'l', type: String, multiple: true, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

console.log('starting with options', options);

if (methods[options.method] && options.list) {
  methods[options.method](options.list);
}