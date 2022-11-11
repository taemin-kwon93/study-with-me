/**
 * 함수 객체는 callable 이면서 constructor이거나 callable이면서 non-constructor이다.
 * 즉, 모든 함수 객체는 호출할 수는 있지만 생성자 함수로서 호출될 수 있는 것은 아니다.
 */
function foo() {
  return 'a';
}

// 일반 함수호출: [[Call]]이 호출된다
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다
new foo();

console.log(foo());
console.log(new foo());
const a = new foo();
console.log(a);
