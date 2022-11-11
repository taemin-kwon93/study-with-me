const person = {};

/**
 * defineProperty는 한번에 하나의 프로퍼티만 정의 가능하다.
 * defineProperties를 이용하면 여러개의 프로퍼티를 정의할 수 있다.
 * 프로퍼티 정의시 디스크립터 객체의 프로퍼티 일부를 생략하면 기본값이 지정된다.
 * value | [[Value]] | undefined
 * get   | [[get]]   | undefined
 * set   | [[set]]   | undefined
 * writable | [[Writable]] | false
 * enumerable | [[Enumerable]] | false
 * configurable | [[Configurable]] | false
 */
Object.defineProperties(person, {
  firstName: {
    value: 'Tom',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: 'Kwon',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true,
  }
});

person.fullName = 'Taemin Kwon';
console.log(person); // { firstName: 'Taemin', lastName: 'Kwon', fullName: [Getter/Setter] }
