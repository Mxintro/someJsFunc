// 深拷贝
function cloneDeep(target) {
  if (typeof(target) !== 'object') return 
  if(target.constructor === Date) return new Date(target);
  if(target.constructor === RegExp) return new RegExp(target);
  const newValue = new target.constructor()
  for (let i in target) {
    let value = target[i]
    // 防止循环引用
    if (value === target) continue
    if (target.hasOwnProperty(i)){
      newValue[i] = value && typeof(value) === 'object' ? cloneDeep(value) : value
    }
  }
  return newValue
}

const o1 = {
  a: 1,
  b: {
    b1: 2, 
    c: [3, {
      c1: 4
    },[5,6]]
  },
  d: /e/,
  f: new Date(),
  g: {},
  func1 (){
    this.a = 2
  }
}

console.log(cloneDeep(o1))