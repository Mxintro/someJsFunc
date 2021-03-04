function binarySearch1(arr, key) {
  let low = 0
  let high = arr.length-1
  
  while (low <= high) {
    const mid = parseInt((low+high)/2)
    const midValue = arr[mid]
    if (key === midValue) {
      return mid
    }else if(key < midValue) {
      high = mid -1
    }else{
      low = mid + 1
    }
  }
  return -1
}
//注意调用栈溢出
function binarySearch2(arr, key, low, high){
  if(low > high) return -1
  const mid = parseInt((low+high)/2)
  const midValue = arr[mid]
  if (key === midValue) {
    return mid
  }else if(key < midValue) {
    return binarySearch2(arr, key, low, mid -1)
  }else{
    return binarySearch2(arr, key, mid + 1, high)
  }
}


// js
function slowSearch(arr, key) {
  return arr.indexOf(key)
}

const arrAlg = require('./sortAlg')

const a = [0, 1, 2, 3, 5,6,7,90,98]
let L = arrAlg.randArray(10000,0,10000)
L = arrAlg.quickSort(L, 0, 9999)

console.time('b1')
const i = binarySearch1(L, 9000)
console.timeEnd('b1')
console.log(i)
console.log(L[i])

console.time('b2')
const j = binarySearch2(L, 9000,  0, (L.length-1))
console.timeEnd('b2')
console.log(j)
console.log(L[j])

console.time('b3')
const k = slowSearch(L, 9000)
console.timeEnd('b3')
console.log(k)


// console.log(binarySearch2(L, 90, 0, (L.length-1)))


// function computeMaxCallStackSize() {
//   try {
//     return 1 + computeMaxCallStackSize();
//   } catch (e) {
//     // Call stack overflow
//     return 1;
//   }
// }
// console.log(computeMaxCallStackSize())