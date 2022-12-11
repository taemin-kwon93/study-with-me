const XMLHttpRequest = require("xhr2");
const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log('success');
        // console.log('response log: ', JSON.parse(xhr.response));
        resolve(JSON.parse(xhr.response));
      } else {
        console.log('error')
        reject(new Error(xhr.status));
      }
    };
  });
};

const url = 'https://jsonplaceholder.typicode.com';

(async () => {
  const { userId } = await promiseGet(`${url}/posts/1`);
  console.log('userId: ', { userId });
  const userInfo = await promiseGet(`${url}/users/${userId}`);
  console.log('userInfo: ', userInfo);
})();

/**
 *
 * promiseGet(`${url}/posts/11`)
 *   .then(({ userId }) => promiseGet(`${url}/users/${userId}`))
 *   .then(userInfo => console.log('userInfo: ', userInfo))
 *   .catch(err => console.log('err:', err))
 */

// Test Something
const A = {
  a : 'a',
  b: 'b',
}

const B = 2;

console.log(A);
console.log({A});
console.log(B);
console.log({B});

/**
 * { a: 'a', b: 'b' }
 * { A: { a: 'a', b: 'b' } }
 * 2
 * { B: 2 }
 */

/** 전체 console.log 내용
 * Test Something에 적은 console.log가 먼저 찍힌다.
 * { a: 'a', b: 'b' }
 * { A: { a: 'a', b: 'b' } }
 * 2
 * { B: 2 }
 *
 * 이후 비동기 처리의 결과가 출력
 * success
 * userId:  { userId: 1 }
 * success
 * userInfo:  {
 *   id: 1,
 *   name: 'Leanne Graham',
 *   username: 'Bret',
 *   email: 'Sincere@april.biz',
 *   address: {
 *     street: 'Kulas Light',
 *     suite: 'Apt. 556',
 *     city: 'Gwenborough',
 *     zipcode: '92998-3874',
 *     geo: { lat: '-37.3159', lng: '81.1496' }
 *   },
 *   phone: '1-770-736-8031 x56442',
 *   website: 'hildegard.org',
 *   company: {
 *     name: 'Romaguera-Crona',
 *     catchPhrase: 'Multi-layered client-server neural-net',
 *     bs: 'harness real-time e-markets'
 *   }
 * }
 */