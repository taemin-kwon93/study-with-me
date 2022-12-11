/**
 * catch 메서드를 모든 then 메서드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러 뿐만 아니라
 * then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.
 * 에러 처리는 then 메서드에서 하지말고 catch 메서드에서 하는 것을 권장한다.
 */
const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log('success')
        resolve(JSON.parse(xhr.response));
      } else {
        console.log('error')
        reject(new Error(xhr.status));
      }
    };
  });
};

promiseGet('https://jsonplaceholder.typicode.com/xxxx/1')
  .then(res => console.log('res: ', res))
  .catch(err => console.log('err:', err))
  .finally(() => console.log('Bye!'));

/** console.log
 * error
 * err: Error: 404
 *     at xhr.onload (/Users/taeminkwon/Documents/dev-kwon/study-with-me/modern-javascript-deep-dive/promise/wrong-url.js:14:16)
 *     at XMLHttpRequest.dispatchEvent (/Users/taeminkwon/Documents/dev-kwon/study-with-me/node_modules/xhr2/lib/xhr2.js:76:20)
 *     at XMLHttpRequest._dispatchProgress (/Users/taeminkwon/Documents/dev-kwon/study-with-me/node_modules/xhr2/lib/xhr2.js:686:14)
 *     at XMLHttpRequest._onHttpResponseEnd (/Users/taeminkwon/Documents/dev-kwon/study-with-me/node_modules/xhr2/lib/xhr2.js:617:14)
 *     at IncomingMessage.<anonymous> (/Users/taeminkwon/Documents/dev-kwon/study-with-me/node_modules/xhr2/lib/xhr2.js:568:23)
 *     at IncomingMessage.emit (node:events:525:35)
 *     at endReadableNT (node:internal/streams/readable:1359:12)
 *     at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
 * Bye!
 */