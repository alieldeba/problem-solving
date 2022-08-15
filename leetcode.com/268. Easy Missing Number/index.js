/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(counter)) {
      return counter;
    }
    counter++;
  }
  return counter;
};
