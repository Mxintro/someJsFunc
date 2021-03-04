function partialUsingArguments(fn) {
  const argsRes = Array.prototype.slice.call(arguments, 1)
  const result = function() {
    return fn.apply(this, argsRes.concat(Array.prototype.slice.call(arguments)))
  }
  return result
}

function  ff() {
  console.log(arguments)
}
partialUsingArguments(ff, 3, 4)(5,7,6)

function valueAtBit(num, bit) {
  const bitStr = num.toString(2)
  return bitStr.slice(bitStr.length-bit, bitStr.length-bit+1)
}