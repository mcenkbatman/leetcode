/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const maxNum = Math.pow(2, 31);
  const isNegative = x < 0;
  if (isNegative) x *= -1;
  
  let decimalCount = 0;
  let copyX = x;
  while (copyX > 0) {
    decimalCount++;
    copyX = Math.floor(copyX / 10);
  }
  
  let reversedX = 0;
  while (x > 0) {
    const currentDigit = x % 10;
    reversedX += Math.pow(10, --decimalCount) * currentDigit;
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    if (reversedX > maxNum) return 0;
    return -1 * reversedX;
  }
  else {
    if (reversedX >= maxNum) return 0;
    return reversedX;
  }
};

/**
 * @param {number} x
 * @return {number}
 */
var reverseV2 = function(x) {
  const maxNum = Math.pow(2, 31);
  const sign = Math.sign(x);
  const stringNum = (x * sign).toString(10);
  const reversed = sign * parseInt(stringNum.split('').reverse().join(''), 10);
  if (reversed >= maxNum || reversed < -1 * maxNum) return 0;
  return reversed;
};

console.log(reverseV2(-123));