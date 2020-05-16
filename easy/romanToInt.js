const test = require('../utils/test');

/**
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 * https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanCharInfoDict = {
    'I': {
      index: 0,
      value: 1,
    },
    'V': {
      index: 1,
      value: 5,
    },
    'X': {
      index: 2,
      value: 10,
    },
    'L': {
      index: 3,
      value: 50,
    },
    'C': {
      index: 4,
      value: 100,
    },
    'D': {
      index: 5,
      value: 500
    },
    'M': {
      index: 6,
      value: 1000,
    },
  };

  const romanCharStack = s.split('').reverse();
  let lastIndex = 0;
  let result = 0;
  for ( let i = 0; i < romanCharStack.length; i++ ) {
    const c = romanCharStack[i];
    const romanCharInfo = romanCharInfoDict[c];
    if (romanCharInfo.index < lastIndex) {
      result -= romanCharInfo.value;
    }
    else {
      lastIndex = romanCharInfo.index;
      result += romanCharInfo.value;
    }
  }
  return result;
};

// const test = (input) => {
//   console.time('runTime');
//   const result = romanToInt(input);
//   console.timeEnd('runTime');
//   console.log(result);
// };

test('DM', romanToInt);