Array.prototype.uniq1 = function () {
  for (let i=0; i<this.length; i++){
    for (let j=i+1; j<this.length; j++){
      if(this[i]===this[j]){
        this.splice(j, 1)
        j--
      }
    }
  }
  return this
}

Array.prototype.uniq = function () {
  const temp = {}
  const uniqA = []
  for (let item of this) {
    if(uniqA[typeof(item)+item] === undefined || Object.prototype.toString.call(item)==='[object Object]'){
      uniqA[typeof(item)+item] = 1
      uniqA.push(item)
    }
  }
  return uniqA
}

Array.prototype.uniqu2 = function () {
  const map = new Map()
  const newArr = new Array()
  this.forEach((item) => {
      if (!map.has(typeof(item)+item) || Object.prototype.toString.call(item)==='[object Object]') {
          map.set(typeof(item)+item, 1)
          newArr.push(item)
      }
  })
  return newArr
}