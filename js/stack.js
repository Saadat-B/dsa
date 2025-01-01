class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

function validParenthesis(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else if (stack.isEmpty()) {
      return false;
    } else {
      let lastItem = stack.peek();

      if (
        (str[i] === ")" && lastItem === "(") ||
        (str[i] === "]" && lastItem === "[") ||
        (str[i] === "}" && lastItem === "{")
      ) {
        stack.pop();
      } else return false;
    }
  }
  return stack.isEmpty();
}

console.log(validParenthesis("([{}])"));
