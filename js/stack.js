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

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    return this.stack.reverse();
  }

  printStack() {
    let str = "";

    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

let myStack = new Stack();

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

  size() {
    return this.stack.length;
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  clear() {
    this.stack = [];
  }

  printStack() {
    let str = "";

    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }

    return str;
  }
}

class Queue {
  constuctor() {
    this.queue = [];
  }

  push(data) {
    this.queue.push(data);
  }

  shift() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
