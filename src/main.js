const commandLineArgs = require('command-line-args')

const { processCallback } = require('./process-callback');
const { processAsyncLib } = require('./process-async-lib');
const { processPromises } = require('./process-promises');
const { processAsyncAwait } = require('./process-async-await');

const processCallbackError = require('./error/process-callback').processCallback;
const processAsyncLibError = require('./error/process-async-lib').processAsyncLib;
const processPromisesError = require('./error/process-promises').processPromises;
const processAsyncAwaitError = require('./error/process-async-await').processAsyncAwait;

const methods = {
  callback: processCallback,
  asyncLib: processAsyncLib,
  promises: processPromises,
  asyncAwait: processAsyncAwait
};

const methodsWithError = {
  callback: processCallbackError,
  asyncLib: processAsyncLibError,
  promises: processPromisesError,
  asyncAwait: processAsyncAwaitError
};

const optionDefinitions = [ 
  { name: 'error', alias: 'e', type: Boolean },
  { name: 'method', alias: 'm', type: String, defaultValue: 'callback' },
  { name: 'list', alias: 'l', type: String, multiple: true, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

console.log('starting with options', options);

if (options.list) {
  if (!options.error && methods[options.method]) {
    methods[options.method](options.list);
  }
  else if (options.error && methodsWithError[options.method]) {
    methodsWithError[options.method](options.list);
  }
}