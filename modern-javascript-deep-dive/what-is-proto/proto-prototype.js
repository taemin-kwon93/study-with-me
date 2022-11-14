// 생성자 함수
function Person(name) {
 this.name = name;
}

const me = new Person('Rin');
console.log(me.__proto__ === Person.prototype); // true

/**
 * 객체의 __proto__ 접근자 프로퍼티와 함수 객체의 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
 * | Person 생성자 함수   | Person.prototype |   me       |
 * | prototype ------>| constructor Person|<--__proto__|
 * |                 | __proto__ Object.prototype|    |
 * | __proto__ ---->|                    |name 'Lee'  |
 */