//冒泡 n-1 n-2 n-3   n^2- n(n-1)/2
function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const tem = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = tem
      }
    }
  }
  return arr
}

//选择 n n-1 n-2 n - 3
function selSort(arr) {
  let min = 0
  for (let j = 0; j < arr.length; j++) {
    min = j
    for (let i = min; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i
      }
    }
    [arr[j], arr[min]] = [arr[min], arr[j]]
  }
  return arr
}

// 快速
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}


//2
function qiuckSort2(arr) {
  if (!Array.isArray(arr)) return
  if (arr.length <= 1) return arr
  const left = [], right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...qiuckSort2(left), arr[0], ...qiuckSort2(right)]
}

// merge nlogn
// 二分法
function mergeSort(array) {
  const half = array.length / 2
  if (array.length < 2) {
    return array
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left), mergeSort(array))
}

function merge(left, right) {
  let arr = []
  // 如果任何一个数组为空，就退出循环
  while (left.length && right.length) {
    // 从左右子数组的最小元素中选择较小的元素
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  // 连接剩余的元素，防止没有把两个数组遍历完整
  return [...arr, ...left, ...right]
}


// 计数排序

function countSort1(arr, k) {
  const arrK = new Array(k+1).fill(0)
  const arrNew = []
  let index = 0

  for (let i of arr) {
    arrK[i] ++
  }

  for (let j=0; j<arrK.length; j++){
    while(arrK[j] > 0) {
      arrNew[index++] = j
      arrK[j] --
    }
  }
  return arrNew
}

function countSort2(arr) {
  const arrK = {}
  const arrNew = []
  let arrIndex = 0

  for (let i of arr) {
    if (i in arrK) {
      arrK[i] ++
    }else {
      arrK[i] = 1
    }
  }
  Object.keys(arrK).forEach(key => {
    while(arrK[key] > 0) {
      arrNew[arrIndex++] = key*1
      arrK[key] --
    }
  })
  return arrNew
}
//
function apiSort(arr) {
  return arr.sort((a, b) => a - b)
}

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}
//性能测试：
const L = randArray(10000, 0, 10000)

const measureDoSomethingTime = (...args) => {
  const testL = [...L]
  const fn = args.shift()
  console.time(fn.name)
  fn.apply(this, [testL, ...args])
  console.timeEnd(fn.name)
}

measureDoSomethingTime(qiuckSort2)
// measureDoSomethingTime(mergeSort)
// measureDoSomethingTime(selSort)
// measureDoSomethingTime(bubbleSort)
measureDoSomethingTime(countSort1, 10000)
measureDoSomethingTime(quickSort, 0, 9999)
measureDoSomethingTime(apiSort)

//

// module.exports = {
//   quickSort,
//   randArray
// }

// a = [9,22,4,5,6,7,1,4,74,0,7,3,90,3,4,6,23,6,6,4,2,1,3,4,6,77,2,13,2,33,22,33,9,2]
// b = [9,22,4,5,6,7,1,4,74,0,7,3,90,3,4,6,23,6,6,4,2,1,3,4,6,77,2,13,2,33,22,33,9,2]
// c = [9,22,4,5,6,7,1,4,74,0,7,3,90,3,4,6,23,6,6,4,2,1,3,4,6,77,2,13,2,33,22,33,9,2]
// // console.time('cs1')
// console.log(countSort1(c, 90))
// console.timeEnd('cs1')
// console.time('cs2')
// console.log(countSort2(a))
// console.timeEnd('cs2')
// console.time('my')
// console.log(b.sort((a,b) => a-b))
// console.timeEnd('my')
// console.time('qs')
// console.log(quickSort(a, 0, a.length-1))
// console.timeEnd('qs')
// console.time('cs1')
// console.log(countSort1(c, 90))
// console.timeEnd('cs1')
