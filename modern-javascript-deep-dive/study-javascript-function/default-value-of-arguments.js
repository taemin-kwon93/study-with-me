/**
 * ES6에서 도입된 매개변수 기본값
 * function add1(x = 3, y = 4, z = 5) 과 같이 설정한다
 */

function add1(x = 3, y = 4, z = 5) {
  console.log(x, y, z);
  return x + y + z;
}

console.log('log start - add1');
console.log(add1);
console.log(add1(1));
console.log(add1(1, 2));
console.log(add1(1, 2, 3));
console.log('log end - add1');

/** console
 * log start - add1
 * [Function: add1]
 * 1 4 5
 * 10
 * 1 2 5
 * 8
 * 1 2 3
 * 6
 * log end - add1
 */