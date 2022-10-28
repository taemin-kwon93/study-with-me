/**
 * 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는
 * 자바스크립트 고유의 특징을 함수 호이스팅(function hoisting)이라 한다.
 */

console.log(add(2, 5));
console.log(sub(4, 2)); // ReferenceError: Cannot access 'sub' before initialization

function add(x, y) {
  return x + y;
}

let sub = function subtraction(x, y) {
  return x - y;
}