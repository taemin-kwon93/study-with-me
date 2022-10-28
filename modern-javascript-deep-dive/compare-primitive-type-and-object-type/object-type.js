/**
 * 원시 값은 변경 불가능한 값이므로 원시 값을 갖는 변수의 값을 변경하려면 재할당 외에는 방법이 없다.
 * 하지만 객체는 변경 가능한 값이다. 따라서 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다.
 * 즉, 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수도 있다.
 * 문제점 : 여러 개의 식별자가 하나의 객체를 공유할 수도 있다.
 */

let person = {
    name: 'Lee'
}

console.log(person); // { name: 'Lee' }
console.log(person.name); // Lee
console.log();

person.country = 'Korea';
console.log(person); // { name: 'Lee', country: 'Korea' }
console.log(person.country); // Korea