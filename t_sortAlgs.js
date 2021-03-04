function bubbleSort(arr) {
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length-i-1; j++) {
      if (a[j] > a[j+1]) [a[j+1], a[j]] = [a[j], a[j+1]]
    }
  }
  return arr
} 


a = [8, 2, 5, 6, 77, 0, 1,42, 645, 0, 77]

console.log(bubbleSort(a))