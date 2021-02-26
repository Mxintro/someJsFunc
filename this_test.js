const a = {
	b: 6,
	tt: () => console.log(this)
}

a.tt()
const yy = a.tt
yy()
