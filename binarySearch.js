function binarySearch1(arr, key) {
  let low = 0
  let high = arr.length-1
  
  while (low <= high) {
    const mid = parseInt((low+high)/2)
    const midValue = arr[mid]
    if (key === midValue) {
      return mid
    }else if(key < midValue) {
      high --
    }else if(key > midValue) {
      low ++
    }else {
      return -1 
    }
  }
}
//1 2 3 4 5

function binarySearch2(arr, key, low, high){

  while (low <= high) {
    const mid = parseInt((low+high)/2)
    const midValue = arr[mid]
    if (key === midValue) {
      return mid
    }else if(key < midValue) {
      binarySearch2(arr, key, low, --high)
    }else if(key > midValue) {
      binarySearch2(arr, key, ++low, high)
    }else {
      return -1 
    }
  }
}

const a = [0, 1, 2, 3, 5,6,7,90,98]
console.log(binarySearch1(a, 90))
console.log(binarySearch2(a, 90, 0, (a.length-1)))