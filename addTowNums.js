function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbersArray(l1, l2) {
  const stack = [];
  for (var i = 0; i < Math.max(l1.length, l2.length); i++) {
    const temp = ((l1[i] || 0) + (l2[i] || 0)) * 10 ** i;
    stack.push(temp);
  }
  return `${stack.reduce((sum, cur) => (sum += cur), 0)}`
    .split("")
    .reverse()
    .map((item) => Number(item));
}

function addTwoNumbers(l1, l2) {
  var stack = [];
  var L = l1;
  var R = l2;
  var i = 0;
  while (L || R) {
    const temp = `${(L ? L.val : 0) + (R ? R.val : 0) + (stack[i] || 0)}`.split("").reverse().map(item => Number(item));
    temp.forEach((item, index) => {
      stack[index + i] = item;
    });
    if (L) {
      L = L.next;
    }
    if (R) {
      R = R.next;
    }
    i++;
  }
  return stack.reduceRight((sum, cur) => {
    const temp = {
      val: cur,
      next: sum,
    };
    return temp;
  }, null);
}

function addTwoNumbersClass(l1, l2) {
  var head = null, node = null;
  var carry = 0;
  while(l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    if (!head) {
      head = node = new ListNode(sum % 10);
    } else {
      node.next = new ListNode(sum % 10);
      node = node.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    node.next = new ListNode(carry);
  }
  return head;
}

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
