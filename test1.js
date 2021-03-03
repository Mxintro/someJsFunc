function main(str){
  const arrMid = str.match(/10+/g) || []
  console.log(arrMid)
  const arrStart = str.match(/^0+1/)
  const arrEnd= str.match(/10+$/)
  const start = arrStart && arrStart[0].length-1 || 0
  const end= arrEnd && arrEnd[0].length-1 || 0
  let len = start > end ? start : end
  arrMid.forEach(el => {
    if(Math.floor(el.length/2) > len) len = Math.floor(el.length/2) 
  });

  return len
}

main('0')

