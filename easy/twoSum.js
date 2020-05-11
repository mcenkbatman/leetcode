/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numbersToIndexesMap = {};
  for (let index = 0; index < nums.length; index++) {
    // check if we found the solution
    if (numbersToIndexesMap[target-nums[index]] >= 0) {
      // yay we found it
      return [numbersToIndexesMap[target-nums[index]], index];
    }
    // noo we couldn't found it, let's move on
    // enter a registry for this number to our lovely map
    numbersToIndexesMap[nums[index]] = index;
  }
};