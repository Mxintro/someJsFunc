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
      uniqA[typeof(item)+item] = item
      uniqA.push(item)
    }
  }
  return uniqA
}