/**
 * 동일한 생성자 함수에 의해 생성된 모든 인스턴스가 메서드를 중복 소유하는 것은 메모리를 낭비한다.
 * 인스턴스를 생성할 때마다 메서드를 생성하므로 퍼포먼스에 악영향을 준다.
 * 상속을 통해 불필요한 중복을 제거한다.
 * 자바스크립트는 프로토타입(prototype)을 기반으로 상속을 구현한다.
 */

function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 매서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(2);
const circle2 = new Circle(4);

console.log(circle1.getArea()); // 12.566370614359172
console.log(circle2.getArea()); // 50.26548245743669

/**
 * Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
 * |Circle.prototype  | 프로토타입 객체
 * |getArea <function>| 상속
 */
console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1 === circle2); // false
console.log(circle1.getArea() === circle2.getArea()); // false