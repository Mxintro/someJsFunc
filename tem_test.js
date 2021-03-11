class Tem {
  constructor (name) {
    this.name = name
  }

  foo () {
    this._bar()
  }
  _bar() {
    console.log(this.name)
  }
  //extends
}

//  手写new 

function myNew(con, ...args) {
  if (typeof(con)!=='function') return
  const obj = {}
  obj.__proto__ = con.prototype
  const result = con.apply(obj, args)
  return typeof(result) === 'object' || typeof(result) === 'function' ? result : obj

}

const tem = new Tem('hello')
const t= {name: 'tt'}
t.tt = tem._bar

tem.foo()
t.tt()