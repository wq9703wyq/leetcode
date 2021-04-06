function twoSum(nums, target) {
  for(var i = 0; i < nums.length; i++) {
    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSumHash(nums, target) {
  const map = new Map();
  for(var i = 0;i < nums.length;i++) {
    const other = target - nums[i];
    if (map.get(other) !== undefined) return [map.get(other), i];

    map.set(nums[i], i);
  }
}

console.log(twoSumHash([2,3,4], 6))