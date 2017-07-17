


const processElem = elem => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('processElem called for', elem);
      return resolve('ok');
    }, Math.random(10) * 100);
  });
};

const processPromises = array => {
  console.log('starting processPromises with', array);
  
  const promises = array.map(elem => processElem(elem));

  Promise.all(promises).then(() => {
    console.log('finished the process');
  })
};

module.exports = {
  processPromises
};