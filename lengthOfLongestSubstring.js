function lengthOfLongestSubstring(s) {
  var stack = [];
  var maxLength = 0;
  const stringArray = s.split("");
  for(var item of stringArray) {
    if (stack.length && stack.includes(item)) {
      const index = stack.indexOf(item);
      stack.splice(0, index + 1);
      stack = [...stack, item];
    } else {
      stack.push(item);
    }
    maxLength = Math.max(maxLength, stack.length);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("dvaabcdf"));