const { test } = require('../utils/test');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const chars = s.split('');
  const len = chars.length;
  if ( len === 0 ) return '';
  let longest = '';
  let longestLen = 0;
  let tempLongest = '';
  for ( let i = 0 ; i < len; i++ ) {
    // check single palindromes
    tempLongest = chars[i];
    let tempLongestLen = 1;
    let left = i - 1;
    let right = i + 1;
    while ( left >= 0 && right < len ) {
      if ( chars[left] === chars[right] ) {
        tempLongest = chars[left] + tempLongest + chars[right];
        tempLongestLen += 2;
        left--;
        right++;
      }
      else {
        break;
      }
    }
    if (tempLongestLen > longestLen) {
      longest = tempLongest;
      longestLen = tempLongestLen;
    }
    // check even palindromes
    if ( chars[i] === chars[i + 1] ) {
      tempLongest = chars[i] + '' + chars[i + 1];
      tempLongestLen = 2;
      left = i - 1;
      right = i + 2;
      while ( left >= 0 && right < len ) {
        if ( chars[left] === chars[right] ) {
          tempLongest = chars[left] + tempLongest + chars[right];
          tempLongestLen += 2;
          left--;
          right++;
        }
        else {
          break;
        }
      }
      if (tempLongestLen > longestLen) {
        longest = tempLongest;
        longestLen = tempLongestLen;
      }
    }
  }
  return longest;
};

test('babad', longestPalindrome);
test('cbbd', longestPalindrome);
test('abba', longestPalindrome);
test('xabba', longestPalindrome);
test('xabbax', longestPalindrome);
