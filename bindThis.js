function bindThis1(f, oTarget) {
  return f.bind(oTarget)
}

// 占用内存更少
function bindThis(f, oTarget) {
  return function() {
    f.apply(oTarget, arguments)
  }
}

function fn(a, b) {
  console.log(this.o+a+b)
}

const fn1 = bindThis(fn,{o:2})
const fn2 = bindThis1(fn,{o:2})

fn1(1,4)
fn2(1,2)

function test() {
  var r = bindThis(function(a, b){return this.test + a + b}, {test: 2})(2, 3);
  return r === 7; 
}