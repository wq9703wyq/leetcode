function pushStack(item, stack) {
  if (typeof stack[stack.length - 1] === "object") {
    stack[stack.length - 1].push(item);
  } else {
    stack.push(item);
  }
}

function calStack(stack) {
  let calculateSymbol = true;
  const sum = stack.reduce((count, cur) => {
    if (cur === "+") {
      calculateSymbol = true;
      return count;
    } else if (cur === "-") {
      calculateSymbol = false;
      return count;
    } else {
      if (calculateSymbol) {
        return count + Number(cur);
      } else {
        return count - Number(cur);
      }
    }
  }, 0);
  return sum;
}

function calculate(S) {
  let stack = [];
  let stackItem = "";
  for (const item of S) {
    if (/[0-9]|\./.test(item)) {
      stackItem += item;
    } else if (stackItem) {
      pushStack(stackItem, stack);
      stackItem = "";
    }
    if (item === "(") {
      stack.push([]);
    } else if (item === ")") {
      const tempStack = stack.pop();
      const sum = calStack(tempStack);
      pushStack(sum, stack);
    } else if (["+", "-"].includes(item)) {
      pushStack(item, stack);
    }
  }
  stackItem && pushStack(stackItem, stack);
  return calStack(stack);
}

// console.log(calculate("(0.1+(4+5+2)-3+(1+2+(9+9)))+(6+8+(6+8))"));
// console.log(calculate("1 + 1"))

var calculateLeet = function (s) {
  const ops = [1];
  let sign = 1;

  let ret = 0;
  const n = s.length;
  let i = 0;
  while (i < n) {
    if (s[i] === "+") {
      sign = ops[ops.length - 1];
      i++;
    } else if (s[i] === "-") {
      sign = -ops[ops.length - 1];
      i++;
    } else if (s[i] === "(") {
      ops.push(sign);
      i++;
    } else if (s[i] === ")") {
      ops.pop();
      i++;
    } else if (/[0-9]|\./.test(s[i])) {
      let stackItem = 0;
      while( /[0-9]|\./.test(s[i]) && i < n) {
        stackItem += s[i];
        i++;
      }
      ret += Number(stackItem) * sign;
    } else {
      i++;
    }
  }
  return ret;
};

console.log(calculateLeet("1 + 1"))
// console.log(calculateLeet("2.1+2.2"))
// console.log(calculateLeet("(0.1+(4+5+2)-3+(1+2+(9+9)))+(6+8+(6+8))"));
