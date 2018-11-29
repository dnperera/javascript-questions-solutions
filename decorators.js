/**
 * Decorator is a function that takes another function as an input and extends behaviour of that later function without explicitly modifying it
 */
//create an object with a method called squareAll

//this function will display time to execute given function

function time(targetObj, key, descriptor) {
  const originalFunc = descriptor.value.bind(targetObj); //bind the original context to the method
  let i = 0;
  //now assign decorated function to the decriptor
  descriptor.value = function(...args) {
    let id = i++;
    console.time(key + " - " + id);
    let value = originalFunc(...args);
    console.timeEnd(key + " - " + id);
    return value;
  };
}

const obj = {
  // @time is the way to call decorator . needs babel to run
  @time
  squareAll(arr) {
    return arr.map(x => x * x);
  }
};

console.log(obj.squareAll(new Array(1000).fill(5)));
