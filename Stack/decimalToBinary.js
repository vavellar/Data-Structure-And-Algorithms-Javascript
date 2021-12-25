const Stack2 = require('./Stack2')

function decimalToBinary(number) {
  const remStack = new Stack2()
  let rem
  let binaryString = ''

  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  
  return binaryString
}

console.log(decimalToBinary(20))