/**
 * 
 * https://leetcode.com/problems/longest-common-prefix/
 */

const test = require('../utils/test');

const longestCommonBetweenTwo = (first, second) => {
  const minLen = Math.min(first.length, second.length);
  for ( let i = 0; i < minLen; i++) {
    if ( first.charAt(i) !== second.charAt(i) ) {
      return first.substring(0, i);
    }
  }
  return first.substring(0, minLen);
};

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  let result = strs[0];
  const length = strs.length;
  for ( let i = 1; i < length; i++ ) {
    result = longestCommonBetweenTwo(result, strs[i]);
    if ( result === '' ) {
      return result;
    }
  }
  return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefixV2 = (strs) => {
  if (!strs || strs.length === 0) return '';
  let result = strs[0];
  let resultLen = result.length;
  const length = strs.length;
  for ( let i = 1; i < length; i++ ) {
    if (!strs[i].startsWith(result)) {
      if (resultLen === 1) return '';
      resultLen--;
      result = result.substr(0, resultLen);
      i--;
    }
  }
  return result;
};

const input = ["aa","a"];
test(input, longestCommonPrefix);