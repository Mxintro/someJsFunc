const task = []
const outPut = i => async () => {
		await setTimeout( () => {
		console.log(i)
		resole()
	}, i*1000)
}

for (var i=0; i < 5; i++) {
	task.push(outPut(i))
}

Promise.all(task).then( _ => {
	setTimeout(() => {
		console.log(i)
	}, 1000)
})