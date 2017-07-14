
// Based on https://mostafa-samir.github.io/async-iterative-patterns-pt1/

const iterateOver = (list, iterator, callback) => {
  let doneCount = 0;
  const finish = () => {
    doneCount++;

    if (doneCount === list.length) {
      return callback();
    }      
  }

  for (let i = 0; i < list.length; i++) {    
    iterator(list[i], finish)
  }
}

const processElemCallback = (elem, callback) => {
  setTimeout(() => {
    console.log('processElem called for', elem);
    return callback();
  }, Math.random(10) * 100);

};

const processCallback = array => {
  console.log('starting processCallback with', array);
  iterateOver(array, (elem, callback) => {
    processElemCallback(elem, () => callback());
  }, () => {
    console.log('finished the process');
  });
};

module.exports = {
  processCallback
};