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


const throttled = throttle(_=> console.log('hi'),1000)
throttled()
throttled()
setTimeout(_ => throttled(),2000)