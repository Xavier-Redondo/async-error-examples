
// Based on https://mostafa-samir.github.io/async-iterative-patterns-pt1/

// TODO: iterateOver does not know at this point that iterator may have had an error
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

const processElem = (elem, callback) => {
  setTimeout(() => {
    console.log('processElem called for', elem);
    if (elem.toUpperCase().startsWith('C')) {
      return callback('Impossible to work with C words');
    }
    return callback();
  }, Math.random(10) * 100);
};

const processCallback = array => {
  console.log('starting processCallback with', array);
  iterateOver(array, (elem, callback) => {
    processElem(elem, err => {
      if (err) {
        console.log('habemus error', err);
        return callback(err);
      }
      return callback();
    });
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
  processCallback
};