// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
function factorial(n) {
  if (n < 0) {
    return null;
  }
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

// 2. Compute the sum of an array of integers using recursion
// sum([1,2,3,4,5,6]); // 21
//do not mutate the original array
function sumofArray(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  //remove first element of the array
  sum += arr.shift();
  return sum + sumofArray(arr);
}
// var numbers = [1, 2, 3, 4, 5, 6, 9];
// console.log(sumofArray([...numbers]));
// console.log(numbers);

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arraySum(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

var numberArray = [1, [2, [4, [[3, [5, [1]]]]]], [[4]], 5];

// 4. Check if a number is even.
var isEven = function(number) {
  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  }

  return isEven(number - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

const sumBelow = function(number) {
  if (number === 0) {
    return 0;
  }
  return number - 1 + sumBelow(number - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
const range = function(x, y) {
  if (x === y - 1) {
    return [];
  }
  return [x + 1].concat(range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
const exponent = function(base, exp) {
  if (exp === 1) {
    return base;
  }
  if (exp === 0) {
    return 0;
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

const powerOfTwo = function(num) {
  if (num === 1) {
    return true;
  }
  if (!Number.isInteger(num) || num === 0) {
    return false;
  }
  return powerOfTwo(num / 2);
};

// 9. Write a function that reverses a string.

const reversString = function(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1].concat(reversString(str.slice(0, str.length - 1)));
};

// 10. Write a function that determines if a string is a palindrome.
const isPalindrome = function(str) {
  if (str.length === 1) {
    return true;
  }
  if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

const modulo = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  }
  if (y === 0) {
    return Infinity;
  }
  if (x === 0) {
    return 0;
  }
  if (x < y) {
    return x;
  }
  return modulo(x - y, y);
};
// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
const multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
};
// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true

const compareStr = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1[0] === str2[0]) {
    if (str1.length > 1 && str2.length > 1) {
      return compareStr(str1.slice(1), str2.slice(1));
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
const createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  if (str.length === 1) {
    return [str];
  }
  return [str[0]].concat(createArray(str.slice(1)));
};
// 17. Reverse the order of an array
const reverseArray = function(array) {
  if (array.length === 0) {
    return [];
  }
  return [array.pop()].concat(reverseArray(array));
};
//console.log(reverseArray(["d", "a", "s", "i", "t", "h"]));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
const buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  if (length === 1) {
    return [value];
  }
  return [value].concat(buildList(value, length - 1));
};
console.log(buildList(8, 8)); // [0,0,0,0,0]
// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
const nthFibo = function(n) {
  if (n < 2) {
    return n;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  //remove the first element from the array
  let word = array.shift();
  return [word.toUpperCase()].concat(capitalizeWords(array));
};

//console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
const capitalizeFirst = function(array) {
  //base case
  if (array.length === 0) {
    return [];
  }
  //remove the first element from the array and then capitalise the first letter;
  let word = array.shift();
  let capitalizedWord = word[0].toUpperCase().concat(word.substring(1));
  return [capitalizedWord].concat(capitalizeFirst(array));
};
//console.log(capitalizeFirst(["car", "poop", "banana"]));

// 29. Return the sum of all even numbers in an object containing nested objects.
var obj1 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
  f: { a: 4, b: { e: 2, c: { a: 2, b: 5, c: 2, ff: "react" } }, ee: "car" }
};

const nestedEvenSum = function(obj) {
  let evenTot = 0;
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        evenTot += obj[key];
      }
    } else {
      evenTot += nestedEvenSum(obj[key]);
    }
  }
  return evenTot;
};
//console.log(nestedEvenSum(obj1));
// 20

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
const letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  }
  obj[str[0]] = obj[str[0]] ? ++obj[str[0]] : 1;
  return letterTally(str.substring(1), obj);
};
//console.log(letterTally("potato"));
// {p:1, o:2, t:2, a:1}

//console.log(isPalindrome("sAip puaki v iKaup Pias"));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
