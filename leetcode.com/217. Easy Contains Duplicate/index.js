var containsDuplicate = function (nums) {
  let removeDuplicate = [...new Set(nums)];
  if (removeDuplicate.length != nums.length) {
    return true;
  }
  return false;
};
