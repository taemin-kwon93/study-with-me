/**
 * Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메서드인 hasOwnProperty를 호출할 수 있다.
 * 이것은 me 객체가 Person.prototype뿐만 아니라 Object.prototype도 상속받았다는 것을 의미한다.
 *
 * 자바스크립트는 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없으면,
 * [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.
 * 이를 프로토타입 체인이라 한다. 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.
 *
 * 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘,
 * 스코프 체인은 식별자 검색을 위한 메커니즘 이라 할 수 있다.
 * 스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는 데 사용된다.
 */
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function(){
  console.log(`hi it's ${this.name}`);
}

const me = new Person('Kwon');

console.log(me.hasOwnProperty('name')); // true
console.log(Object.getPrototypeOf(me) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty.call(me, 'name')); // true