const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 800));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 500));


const res = [];
requestData1()
  .then(data => {
    res.push(data);
    return requestData2();
  })
  .then(data => {
    res.push(data);
    return requestData3();
  })
  .then(data => {
    res.push(data);
    console.log('res: ', res); // res:  [ 1, 2, 3 ] => 약 6초 소요
  })
  .catch(console.log);

/**
 * Promise.all 메서드는 인수로 전달받은 배열의 모든 프로미스가 fulfilled 상태가 되면 종료한다.
 * 첫 번째 프로미스가 가장 나중에 fulfilled 상태가 되어도 Promise.all 메서드는 첫 번째 프로미스가
 * resolve 한 처리 결과부터 차례대로 배열에 저장해 그 배열을 resolve하는 새로운 프로미스를 반환한다.
 * 즉, 처리순서가 보장된다.
 */
Promise.all([requestData1(), requestData2(), requestData3()])
.then(console.log)// [ 1, 2, 3 ] => 약 3초 소요
.catch(console.error);

/**
 * Promise.all 메서드는 인수로 전달받은 배열의 프로미스가 하나라도 rejected 상태가 되면
 * 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다.
 */
Promise.all([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error1')), 1000,)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error2')), 800,)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error3')), 500,)),
])
  .then(console.log)
  .catch(console.log); // Error: Error3

Promise.race([requestData1(), requestData2(), requestData3()])
  .then(console.log) // 3
  .catch(console.error);

Promise.race([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error1')), 1000,)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error2')), 800,)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error3')), 500,)),
])
  .then(console.log)
  .catch(console.log); // Error: Error3


/** 위 내용의 console.log 전문
 * Error: Error3
 *     at Timeout._onTimeout (/Users/taeminkwon/Documents/dev-kwon/study-with-me/modern-javascript-deep-dive/promise/promise-all-race.js:39:54)
 *     at listOnTimeout (node:internal/timers:564:17)
 *     at process.processTimers (node:internal/timers:507:7)
 * 3
 * Error: Error3
 *     at Timeout._onTimeout (/Users/taeminkwon/Documents/dev-kwon/study-with-me/modern-javascript-deep-dive/promise/promise-all-race.js:51:54)
 *     at listOnTimeout (node:internal/timers:564:17)
 *     at process.processTimers (node:internal/timers:507:7)
 * [ 1, 2, 3 ]
 * res:  [ 1, 2, 3 ]
 */