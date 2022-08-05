var singleNumber = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result.includes(nums[i])) {
      result.splice(result.indexOf(nums[i]), 1);
    } else {
      result.push(nums[i]);
    }
  }

  return result;
};
