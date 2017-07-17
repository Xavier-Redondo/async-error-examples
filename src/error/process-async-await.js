async function processElem(elem) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('processElem called for', elem);
      if (elem.toUpperCase().startsWith('C')) {
        return reject('Impossible to work with C words');
      }
      return resolve('ok');
    }, Math.random(10) * 100);
  });
};

async function processAsyncAwait(array) {
  const promises = array.map(elem => processElem(elem));

  await Promise.all(promises)
    .then(() => console.log('Finished the process'))
    .catch(err => console.log('Process interrupted due to an error', err))
};

module.exports = {
  processAsyncAwait
};