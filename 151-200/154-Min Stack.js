/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack[this.length] = x;
  this.length += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.length > 0) {
    this.length -= 1;
    return this.stack[this.length];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.length > 0) {
    return this.stack[this.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.length > 0) {
    return this.stack
      .slice(0, this.length)
      .reduce((a, b) => { return a < b ? a : b; });
  }
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());