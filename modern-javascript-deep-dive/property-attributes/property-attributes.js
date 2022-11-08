/**
 * 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
 * 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.
 * Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다.
 */

const person = {
  name: 'Lee',
};

console.log(Object.getOwnPropertyDescriptor(person, 'name')); // { value: 'Lee', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(person));
/** console
 * ES8에서 도입된 getOwnPropertyDescriptors
 * {
 *   name: {
 *     value: 'Lee',
 *     writable: true,
 *     enumerable: true,
 *     configurable: true
 *   }
 * }
 */