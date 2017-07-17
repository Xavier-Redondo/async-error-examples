const async = require('async');


const processElem = (elem, callback) => {
  setTimeout(() => {
    console.log('processElem called for', elem);
    if (elem.toUpperCase().startsWith('C')) {
      return callback('Impossible to work with C words');
    }
    return callback();
  }, Math.random(10) * 100);

};

const processAsyncLib = array => {
  console.log('starting processAsyncLib with', array);
  async.each(array, (elem, callback) => {
    processElem(elem, err => callback(err));
  }, err => {
     if (err) {
      console.log('Process interrupted due to an error', err);
    }
    else {
      console.log('Finished the process');
    }
  });
};

module.exports = {
  processAsyncLib
};