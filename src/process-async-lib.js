const async = require('async');


const processElem = (elem, callback) => {
  setTimeout(() => {
    console.log('processElem called for', elem);
    return callback();
  }, Math.random(10) * 100);

};

const processAsyncLib = array => {
  console.log('starting processAsyncLib with', array);
  async.each(array, (elem, callback) => {
    processElem(elem, () => callback());
  }, () => {
    console.log('finished the process');
  });
};

module.exports = {
  processAsyncLib
};