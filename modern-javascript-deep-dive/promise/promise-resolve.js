/**
 * resolvedPromise1는 resolvedPromise2와 동일하게 동작한다.
 * rejectedPromise1는 rejectedPromise2와 동일하게 동작한다.
 */
const resolvedPromise1 = Promise.resolve([1,2,3,4,5]);
resolvedPromise1.then(console.log); // [ 1, 2, 3, 4, 5 ]

const resolvedPromise2 = new Promise(resolve => resolve([6,7,8]));
resolvedPromise2.then(console.log); // [ 6, 7, 8 ]

const rejectedPromise1 = Promise.reject(new Error('Error!'));
rejectedPromise1.catch(console.log); // Error: Error!

const rejectedPromise2 = new Promise((_, reject) => reject(new Error('Error!')));
rejectedPromise2.catch(console.log); // Error: Error!