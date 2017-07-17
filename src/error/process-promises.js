const processElem = elem => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('processElem called for', elem);
      if (elem.toUpperCase().startsWith('C')) {
        return reject('Impossible to work with C words');
      }
      return resolve('ok');
    }, Math.random(10) * 100);
  });
};

const processPromises = array => {
  console.log('starting processPromises with', array);
  
  const promises = array.map(elem => processElem(elem));

  Promise.all(promises)
    .then(() => console.log('Finished the process'))
    .catch(err => console.log('Process interrupted due to an error', err))
};

module.exports = {
  processPromises
};