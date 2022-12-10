
/**
 * ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로미스(Promise)를 도입했다.
 * 프로미스는 비동기 처리 시점을 명확하게 표현할 수 있다.
 */
const get = url => {
  var XMLHttpRequest = require('xhr2');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('xhr.response');
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

get('https://jsonplaceholder.typicode.com/posts/1');
/**console
 * {
 *   userId: 1,
 *   id: 1,
 *   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
 *   body: 'quia et suscipit\n' +
 *     'suscipit recusandae consequuntur expedita et cum\n' +
 *     'reprehenderit molestiae ut ut quas totam\n' +
 *     'nostrum rerum est autem sunt rem eveniet architecto'
 * }
 */