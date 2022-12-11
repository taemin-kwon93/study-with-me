/**
 * 전달받은 프로미스가 모두 settled 상태(비동기 처리가 수행된 상태, 즉 fulfiled 또는 rejected 상태)가 되면 처리 결과를 배열로 반환한다.
 */
Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 500)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error!')), 1000))
]).then(console.log);

/** console.log
 * [
 *   { status: 'fulfilled', value: 1 },
 *   {
 *     status: 'rejected',
 *     reason: Error: Error!
 *         at Timeout._onTimeout (/Users/taeminkwon/Documents/dev-kwon/study-with-me/modern-javascript-deep-dive/promise/promise-all-settled.js:3:54)
 *         at listOnTimeout (node:internal/timers:564:17)
 *         at process.processTimers (node:internal/timers:507:7)
 *   }
 * ]
 */