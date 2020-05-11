/**
 * 
 * https://leetcode.com/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let decimalCount = 0;
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    if (x < 10) return true;
    let isPalindrome = true;
    let copyX = x;
    while (copyX > 0) {
      copyX = Math.floor(copyX / 10);
      decimalCount++;
    }
    for (let i = 1; i <= decimalCount / 2; i++) {
      const rightDigit = Math.floor(x / (10 ** (i - 1))) % 10;
      const leftDigit = Math.floor(x / (10 ** (decimalCount - i) )) % 10;
      if (rightDigit !== leftDigit) {
        isPalindrome = false;
        break;
      }
    }
    return isPalindrome;
};

console.log(isPalindrome(50005));