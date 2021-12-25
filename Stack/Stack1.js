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