const person = {};

Object.defineProperty(person, 'firstName', {
  value: 'Tom',
  writable: true,
  enumerable: true,
  configurable: true
});

/**
 * 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
 */
Object.defineProperty(person, 'lastName', {
  value: 'Kwon',
});

console.log(person.firstName);
console.log(person.lastName);
console.log();

let descriptor1 = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName: ' + descriptor1);
console.log();

let descriptor2 = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName: ' + descriptor2);
console.log();

console.log(Object.keys(person));

// Object.defineProperty(person, 'lastName', {enumerable: true}); // TypeError: Cannot redefine property: lastName