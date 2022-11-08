/**
 * 접근자 함수는 getter/setter 함수라고도 부른다.
 * 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다.
 * fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
 *
 */

const person = {
  boyFriend: 'Taemin',
  girlFriend: 'Sua',
  // getter 함수
  get fullName() {
    return `${this.boyFriend}💗${this.girlFriend}`
  },
  // setter 함수
  set fullName(name) {
    [this.boyFriend, this.girlFriend] = name.split(' ');
    console.log(this.boyFriend);
    console.log(this.girlFriend);
  },
};

console.log(person.boyFriend + ' ' + person.girlFriend); // Taemin Sua
person.fullName = 'Tom Rin';
console.log(person.fullName); // Tom💗Rin
console.log()

let descriptor1 = Object.getOwnPropertyDescriptor(person, 'boyFriend');
let descriptor2 = Object.getOwnPropertyDescriptor(person, 'girlFriend');
console.log('descriptor1');
console.log(descriptor1); // { value: 'Tom', writable: true, enumerable: true, configurable: true }
console.log()

console.log('descriptor2');
console.log(descriptor2); // { value: 'Rin', writable: true, enumerable: true, configurable: true }
console.log()

let descriptor3 = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('descriptor3');
console.log(descriptor3);
console.log()
/** console
 * {
 *   get: [Function: get fullName],
 *   set: [Function: set fullName],
 *   enumerable: true,
 *   configurable: true
 * }
 */

let descriptor4 = Object.getOwnPropertyDescriptors(person);
console.log('descriptor4');
console.log(descriptor4);
/** console
 * {
 *   boyFriend: {
 *     value: 'Tom',
 *     writable: true,
 *     enumerable: true,
 *     configurable: true
 *   },
 *   girlFriend: {
 *     value: 'Rin',
 *     writable: true,
 *     enumerable: true,
 *     configurable: true
 *   },
 *   fullName: {
 *     get: [Function: get fullName],
 *     set: [Function: set fullName],
 *     enumerable: true,
 *     configurable: true
 *   }
 * }
 */