// console.log('1');
// setImmediate(function() {
//   console.log('immediate1');
// });
// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9'); 
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
//     process.nextTick(function() {
//       console.log('10');
//    })
// })
// setImmediate(function() {
//   console.log('immediate2');
// });

// 1 7 6 8 2 4 3 5 9 11 10 12

//click promise data click promise data timeout timeout
// console.log('=======')
// setTimeout(() => {
//   console.log('1');
//   setTimeout(() => {
//     console.log('1-1');
//   }, 0);
  
//   setImmediate(() => {
//     console.log('1-a');
//   });
// },100);

// setTimeout(() => {
//   console.log('2');
// },100);
// setImmediate(() => {
//   console.log('a');
// });


// 函数内调用
const test = () => {
  console.log('1');
  setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
  })
  setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
  })
  new Promise(function(resolve) {
      console.log('7');
      resolve();
  }).then(function() {
      console.log('8')
  })
}
// 1 7 
test()