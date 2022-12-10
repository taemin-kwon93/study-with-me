
/**
 * ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로미스(Promise)를 도입했다.
 * 프로미스는 비동기 처리 시점을 명확하게 표현할 수 있다.
 *
 * 아래는 Get 요청을 위한 비동기 함수이며 콜백 함수를 통해 결과를 받는 예제이다.
 */
const get = (url, successCallback, failureCallback) => {
  var XMLHttpRequest = require('xhr2');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      successCallback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
      failureCallback(JSON.parse(xhr.response));
    }
  };
};

get('https://jsonplaceholder.typicode.com/posts/1', successCallback, failureCallback);
/**
 * 콜백 함수를 통해 비동기 처리 결과에 대한 후속 작업을 수행하는 비동기 함수가 처리 결과를 가지고 다시 비동기 함수를 호출해야 한다면 복잡도가 높아진다.
 * 이를 '콜백 헬'이라 한다.
 *
 * get 요청이 성공시 아래와 같은 log를 확인할 수 있다.
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