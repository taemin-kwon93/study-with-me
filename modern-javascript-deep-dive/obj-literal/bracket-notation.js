let person = {
    name: 'Lee',
};

console.log(person.name); // Lee
console.log(person['name']); // Lee, bracket notation(괄호 표기법)
// console.log(person[name]); // ReferenceError: name is not defined
console.log(person.age); // undefined
console.log(person['age']); // undefined

/**
 * 대괄호 표기법을 사용하는 경우
 * 대괄호 프로퍼티 접근 연산자 내부에 지정하는
 * 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
 *
 * 대괄호 프로퍼티 접근 연산자 내에
 * 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면
 * 자바스크립트 엔진은 식별자로 해석한다.
 */