/**
 * prototype 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로퍼티 타입을 가리킨다.
 * 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와
 * ES6 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.
 */

const Person1 = name => {
  this.name = name;
}

const Person2 = function(name) {
  this.name = name;
}

console.log(Person1.hasOwnProperty('prototype')); // false
console.log(Person2.hasOwnProperty('prototype')); // true

const obj = {
  foo() {}
};

console.log(obj.foo.hasOwnProperty('prototype')); // false
console.log(obj.foo.prototype); // undefined

console.log(Person1.hasOwnProperty('__proto__')); // false
console.log(obj.foo.hasOwnProperty('__proto__')); // false