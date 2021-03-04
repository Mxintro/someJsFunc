function throttle(fn, delay){
	let lock = false
	return function(){
		if(!lock){
			lock = true
			fn.apply(this, arguments)
			setTimeout(_ => lock = false,delay)
		}
	}
}

function throttle2(fn, wait,...args){
  var pre = Date.now();
  return function() {
    // 函数可能会有入参
    var context = this
    var now = Date.now()
    if(now - pre >= wait){
      // 将执行函数的this指向当前作用域
      fn.apply(context,args)
      pre = Date.now()
    }
  }
}
const throttled = throttle(_=> console.log('hi'),1000)
throttled()
throttled()
setTimeout(_ => throttled(),2000)