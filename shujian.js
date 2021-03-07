const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
  process.nextTick(() => {
  	console.log('nextTick')
  })
  setImmediate(() => {
  //运行一些东西
  	console.log('setImmediate')
})
}

foo()


00000010
00100000