/* The implementation using objects allow acess directily the element, using less memory space and continue having all the elements organized*/

module.exports = class Stack2 {
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  pop() {
    if(this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.items[this.count -1]
  }

  clear() {
    while(!this.isEmpty()) {
      this.pop()
    }
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString
  }
}