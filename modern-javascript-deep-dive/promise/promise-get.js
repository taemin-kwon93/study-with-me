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
  .then(res => console.log('res: ', res))
  .catch(err => console.log('err:', err))
  .finally(() => console.log('Bye!'));

/** console.log
 * success
 * res:  {
 *   userId: 1,
 *   id: 1,
 *   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
 *   body: 'quia et suscipit\n' +
 *     'suscipit recusandae consequuntur expedita et cum\n' +
 *     'reprehenderit molestiae ut ut quas totam\n' +
 *     'nostrum rerum est autem sunt rem eveniet architecto'
 * }
 * Bye!
 */