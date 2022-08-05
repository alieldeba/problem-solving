var singleNumber = function(nums) {
  let one = [];
  let two = [];
  let three = [];
  
  for (let i = 0; i < nums.length; i++) {
      if (!one.includes(nums[i])) {
          one.push(nums[i]);
          continue;
      }
      
      if (!two.includes(nums[i])) {
          two.push(nums[i]);
          continue;
      }
      
      if (!three.includes(nums[i])) {
          three.push(nums[i]);
      }
  }
  
  for (let j = 0; j < one.length; j++) {
      if (!three.includes(one[j])) {
          return one[j];
      }
  }
};