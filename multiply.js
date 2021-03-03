// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
function multiply(a, b) {
  const timeA = Math.pow(10, a.toString().split('.')[1]?.length | 0)
  const timeb = Math.pow(10, b.toString().split('.')[1]?.length | 0)
  const result = Math.round(a*timeA*b*timeb)/(timeA*timeb)
  console.log(result) 
  return result
}

function multiply(a, b) {
  const timeA = Math.pow(10, a.toString().slice(a.toString().indexOf('.')+1).length)
  const timeB = Math.pow(10, b.toString().slice(b.toString().indexOf('.')+1).length)  
  return Math.round(a*timeA*b*timeB)/(timeA*timeB)
}

multiply(3, 0.1003)

function iterate(obj) {
  const ownPro = []
  for (let key in obj) {
      
      obj.hasOwnProperty(key) ? ownPro.push(`${key}: ${obj[key]}`) : ''
  }
  return ownPro
}