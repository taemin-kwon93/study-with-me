/**
 * 생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어
 * 함수 객체를 생성하는 시점에 프로토타입도 생성된다.
 */

// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype);

// 생성자 함수
function Person(name) {
  this.name = name;
}