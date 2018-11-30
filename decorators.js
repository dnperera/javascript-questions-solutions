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

/* Decorator to check user has rights to add ,view or delete */

//Assume User has following permissions except delete
const User = { permissions: ["read", "create"] };

const isAuthorised = permission => {
  return function(target, key, descriptor) {
    const originalFunc = descriptor.value.bind(target); //bind the correct context
    descriptor.value = function(...args) {
      if (!User.permissions.includes(permission)) {
        return console.error(`You do not have ${permission} permission .`);
      } else {
        return originalFunc(...args);
      }
    };
  };
};
const names = {
  listofNames: new Set(),
  @isAuthorised("read")
  get() {
    return Array.from(this.listofNames);
  },
  @isAuthorised("create")
  add(name) {
    this.listofNames.add(name);
  },
  @isAuthorised("delete")
  remove(name) {
    this.listofNames.delete(name);
  }
};
