const { test } = require('../utils/test');

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const regExpForNumber = /^\s*-?\+?\d+/;
  const matches = str.trim().match(regExpForNumber);
  const matchedStr = matches ? matches[0] : '';
  const matchedNum = parseInt(matchedStr, 10);
  if (!matchedNum) return 0;
  const min32BitInt = Math.pow(-2, 31);
  const max32BitInt = Math.pow(2, 31) - 1;
  if (matchedNum < min32BitInt) return min32BitInt;
  if (matchedNum > max32BitInt) return max32BitInt;
  return matchedNum;
};

test('-91283472332', myAtoi);
test('+1', myAtoi);
