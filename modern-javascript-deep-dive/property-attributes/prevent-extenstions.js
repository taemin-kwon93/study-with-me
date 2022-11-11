/**
 * 객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다.
 * 즉, 프로퍼티를 추가하거나 삭제할 수 있고,
 * 프로퍼티 값을 갱신할 수 있으며, Object.defineProperty 또는
 * Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.
 * 객체의 변경을 방지하는 다양한 메서드가 있다.
 * 메서드 별로 객체의 변경을 금지하는 강도가 다르다
 * 구분        | 메서드                      | 프로퍼티 추가 | 삭제 | 값 읽기 | 값 쓰기 | 어트리뷰트 재정의 |
 * 객체 확장금지 | Object.preventExtensions  | X         | O   | O     | O     | O            |
 * 객체 밀봉   | Object.seal               | X         | X   | O     | O     | X            |
 * 객체 동결   | Object.freeze             | X        | X    | O     | X     | X            |
 */

// 확장이 금지된 객체는 프로퍼티 추가가 금지된다.
const personObjPreventExtensions = {
  name: 'Tom'
}
console.log(Object.isExtensible(personObjPreventExtensions)); // true
Object.preventExtensions(personObjPreventExtensions);
console.log(Object.isExtensible(personObjPreventExtensions)); // false

personObjPreventExtensions.age = 23;
console.log(personObjPreventExtensions); // { name: 'Tom', age: 23 } -> { name: 'Tom' }

personObjPreventExtensions.name = 'Taemin';
console.log('name : ' + personObjPreventExtensions.name); // name : Taemin

const personObjSeal = {
  name: 'Sua'
}

console.log(Object.isSealed(personObjSeal)); // false
Object.seal(personObjSeal);
console.log(Object.isSealed(personObjSeal)); // true
console.log(Object.getOwnPropertyDescriptors(personObjSeal));
/** console
 * {
 *   name: {
 *     value: 'Sua',
 *     writable: true,
 *     enumerable: true,
 *     configurable: false
 *   }
 * }
 */

personObjSeal.age = 20; // 무시된다
delete personObjSeal.name;
console.log('personObjSeal delete name property');
console.log(personObjSeal);