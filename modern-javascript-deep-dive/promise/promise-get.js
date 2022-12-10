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

promiseGet('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Bye!'));
