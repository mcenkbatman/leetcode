/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function(nums) {

  const resArray = [];

  nums.sort((a,b) => a - b);
  const length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    const firstNum = nums[i];
    if (firstNum > 0) {
      break;
    }
    if (i === 0 || firstNum !== nums[i - 1]) {
      let startInd = i + 1;
      let endInd = length - 1;

      while (startInd < endInd) {
        const start = nums[startInd];
        const end = nums[endInd];
        const total = firstNum + start + end;
        if (start > (-1 * firstNum / 2)) {
          break;
        }
        if (total < 0 || (startInd > 0 && start === nums[startInd - 1] && startInd -1 !== i)) {
          startInd++;
        }
        else if (total > 0 || (endInd < length -1 && end === nums[endInd + 1])) {
          endInd--;
        }
        else {
          resArray.push([firstNum, start, end]);
          startInd++;
          endInd--;
        }
      }
    }
  }
  return resArray;
};