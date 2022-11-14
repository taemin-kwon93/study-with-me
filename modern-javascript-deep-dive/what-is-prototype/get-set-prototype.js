/**
 * __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 경우에는
 * Object.getPrototypeOf 메서드를 사용한다.
 * 프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를 사용한다.
 * Object.getPrototypeOf, Object.setPrototypeOf는
 * get Object.prototype.__proto__, set Object.prototype.__proto__의 내용과 일치한다.
 */

const obj = {};
const parent = { x: 1 };

Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, parent);
console.log(obj); // {}
console.log(obj.x); // 1