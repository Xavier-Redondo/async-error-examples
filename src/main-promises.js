// This examples are based on the four puzzles at https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// but adding a timeout and a parameter passed in the resolve of the first promise.

// IMPORTANT: To be more clear about the difference in each type of promise chaining, 
// timeout of createAMushroom has to be visibly longer than eatAMushroom.

const createAMushroom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The Mushroom is here!');
      resolve('Mushroom');
    }, 5000);
  });
};

const eatFood = food => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log( `The ${food} has been eaten!`);
      resolve();
    }, 1000);
  })
}

const finalHandler = result => {
  console.log('finalHandler called with', result);
}


// createAMushroom
// |------------/5s/-----------|
//                             eatFood(Mushroom)
//                             |------/2s/------|
//                                              finalHandler(result of eatFood is undefined)
//                                              |-------------|
const example1 = () => {
  createAMushroom()
    .then(function(food) {
      return eatFood(food);
    })
    .then(finalHandler);
};



// createAMushroom
// |----------/5s/-------------|
//                             eatFood(Mushroom)
//                             |------------/2s/--------------|
//                             finalHandler(undefined)
//                             |-----------|
// 
// Two details:
// Detail 1: finalHandler receives undefined because there is no return in eatFood and then the promise returns undefined
// Detail 2: finalHandler is called as soon as createMushroom finishes 
const example2 = () => {
  createAMushroom()
    .then(function(food) {
      eatFood(food);
    })
    .then(finalHandler);
};

// createAMushroom
// |----------/5s/-----------------|
// eatFood(undefined)              |
// |------------/2s/----|          |
//                                 finalHandler(Mushroom)
//                                 |--------------------|
//
const example3 = () => {
  createAMushroom()
    .then(eatFood())
    .then(finalHandler);
}

// createAMushroom
// |------------/5s/-----------|
//                             eatFood(Mushroom)
//                             |------/2s/------|
//                                              finalHandler(result of eatFood is undefined)
//                                              |-------------|
const example4 = () => {
  createAMushroom()
    .then(eatFood)
    .then(finalHandler);
}

example4();