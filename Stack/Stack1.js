
/*
When we implements a stack class using arrays, the most of the methods has a time complexity O(n). 
That means we have iterate through the array until we find the element that we looking for, 
in the worst case, we make the iterate for all positions of array. If we have a big array,
we need most memory space.
*/
class Stack1 {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  peek() {
    return this.items[this.size() - 1]
  }
}

const stack = new Stack1()

console.log(stack.isEmpty())
stack.push(8)
stack.push(5)

console.log(stack.peek())

stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)

stack.pop()
stack.pop()

console.log(stack.size())