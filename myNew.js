
//  手写new 

function myNew(con, ...args) {
  if (typeof(con)!=='function') return
  // const obj = {}
  // obj.__proto__ = con.prototype // 可行
  const obj = Object.create(con.prototype)
  const result = con.apply(obj, args)
  return typeof(result) === 'object' || typeof(result) === 'function' ? result : obj
}


// 测试
function Person(name) {
  this.name = name;
  return function() { // 用来测试第 5 点
    console.log('返回引用数据类型');
  };
}
// 用来测试第 2 点和第 3 点
Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

const me = myNew(Person, 'mx'); // 用来测试第 4 点
me.sayName(); // My name is mx
console.log(me); // Person {name: 'mx'}

