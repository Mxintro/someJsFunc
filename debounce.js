function debounce(fn, delay){
  let timer = null
  return function(){
    const that = this
    if(timer){
      global.clearTimeout(timer)
    }
    timer = setTimeout(_ => {
      fn.apply(that, arguments)
      timer = null
    }, delay) 
  }
}



const debounced = debounce(()=>console.log('hello'),1000)
debounced()
debounced()
setTimeout(_ => debounced(), 1100)