//冒泡 n-1 n-2 n-3   n^2- n(n-1)/2
function bubbleSort(arr) {
	for (let j=0; j<arr.length; j++) {
		for (let i=0; i<arr.length-j-1; i++) {
			if (arr[i] > arr[i+1]) {
				const tem = arr[i+1]
				arr[i+1] = arr[i]
				arr[i] = tem
			}
		}
	}
	return arr
}

//选择 n n-1 n-2 n - 3
function selSort(arr) {
	let min = 0
	for (let j=0; j<arr.length; j++) {
		min = j
		for (let i=min; i<arr.length; i++) {
			if (arr[i] < arr[min]) {
				min = i
			}
		}
		[arr[j], arr[min]] = [arr[min], arr[j]]
	}
	return arr
}

// 快速
function swap(items, firstIndex, secondIndex){
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
		}else {
			right.push(arr[i])
		}
	}
	return [...qiuckSort2(left), arr[0], ...qiuckSort2(right)]
}

// merge nlogn
function mergeSort(array) {
  const half = array.length / 2
  if(array.length < 2){
    return array
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
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
  return [ ...arr, ...left, ...right ]
}

function randArray(len, min, max) {
	return Array.from({length:len}, v=> Math.floor(Math.random()*(max-min))+min);
}
//性能测试：
const L = randArray(100000,0,100000)

const measureDoSomethingTime = (fn, l, r) => {
	const testL = [...L]
	console.time('fn()')
	const res = arguments.length > 1 ? fn(testL, l, r) : fn(testL)
	console.timeEnd('fn()')
}

measureDoSomethingTime(qiuckSort2)
measureDoSomethingTime(mergeSort)
// measureDoSomethingTime(selSort)
// measureDoSomethingTime(bubbleSort)
measureDoSomethingTime(quickSort, 0, 99999)

module.exports = {
  quickSort,
  randArray
}