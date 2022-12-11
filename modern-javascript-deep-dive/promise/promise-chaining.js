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

promiseGet(`${url}/posts/11`)
  .then(({ userId }) => promiseGet(`${url}/users/${userId}`))
  .then(userInfo => console.log('userInfo: ', userInfo))
  .catch(err => console.log('err:', err))

// promiseGet(`${url}/posts/11`)
// .then(response => console.log(response))