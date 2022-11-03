/**
 * 1. 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.
 * 2. 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다.
 */

let x = 1;

function foo() {
  let x = 10;
  console.log(x); // 10
  bar();
}

function bar() {
  console.log(x); // 6행에 있는 x를 가르킨다
}

foo(); // 1
bar(); // 1