

const processElem = async elem => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('processElem called for', elem);
      return resolve('ok');
    }, Math.random(10) * 100);
  });
};

const processAsyncAwait = async array => {
  const promises = array.map(elem => processElem(elem));

  await Promise.all(promises);
  
  console.log('Finished the process');
};

module.exports = {
  processAsyncAwait
};