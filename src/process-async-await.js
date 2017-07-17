

async function processElem(elem) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('processElem called for', elem);
      return resolve('ok');
    }, Math.random(10) * 100);
  });
};

async function processAsyncAwait(array) {
  const promises = array.map(elem => processElem(elem));

  await Promise.all(promises);
  
  console.log('finished the process');
};

module.exports = {
  processAsyncAwait
};