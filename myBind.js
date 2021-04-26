Function.prototype.myBind = function (thisArg, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('type error')
  }
  fn = this
  return function fbound(...args2) {
    this.o = 3
    // new调用就绑定到this上,否则就绑定到传入的thisArg上
    return fn.call(this instanceof fbound ? this : thisArg, ...args, ...args2)
  }
}

function fn(a, b) {
  console.log(this.o+a+b)
}

const fn1 = fn.myBind({o: 2})
const fn2 = fn.myBind({o: 2})

fn1(1,4)
new fn2(1,4)