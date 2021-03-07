function throttle(fn, delay){
	let lock = false
	return function(){
		if(!lock){
			lock = true
			fn.apply(this, arguments)
			setTimout(_ => lock = false,delay)
		}
	}
}


const throttled = throttle(_=> console.log('hi'),2000)
throttled()
throttled()
throttled()