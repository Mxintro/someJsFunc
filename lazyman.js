const lazyMan = (name) => {
	const taskQueue = []
	const next = () => { const taskRun = taskQueue.shift(); taskRun?.()}
	const hello = () => {console.log(`hello! I am ${name}`); next()}
	taskQueue.push(hello)
	
 	const api = {
		sleepFirst: (n)=>{
			const task = () => setTimeout(()=>{console.log(`I've sleep ${n}sec`); next()}, n*1000); 
			taskQueue.unshift(task)
			return api
		},
		eat: (type) => {
			const task =() => {console.log('eat'+ type==='lunch' ? '午餐':'晚餐'); next()}
			taskQueue.push(task)
			return api
		}
	}
	setTimeout(()=>next())
	return api
}