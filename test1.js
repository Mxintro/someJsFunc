function main(arr){
  let arr0 = []
  let len = 0
  for (let i=0; i<arr.length; i++){
      if(arr[i]===0){
          arr0.push(0)
      }else {
          if(len < arr0.length)len=arr0.length
          arr0 = []
      }
  }
  const t = Math.round(len/2)
  console.log(t)
  return t
}

main([1, 0, 0 ,0, 1, 0, 1])