const removeDuplicates1 = function (S) {
  const duplicatesIndex = S.split("").findIndex((item, index, arr) => arr[index + 1] === item);
  const splitString = S.split("");
  duplicatesIndex >= 0 && splitString.splice(duplicatesIndex, 2);
  const checkString = splitString.join("");
  if (checkString.length === S.length) {
    return checkString;
  }
  return removeDuplicates(checkString);
}

function removeDuplicates(S) {
  var stack = [];
  for (const str of S) {
    if (stack.length && [...stack].pop() === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }
  return stack.join("");
}

console.log(removeDuplicates("abbaca"));
