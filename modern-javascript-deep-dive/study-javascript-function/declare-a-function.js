/**
 * 자바스크립트의 함수는 객체 타입의 값이다.
 * 따라서 숫자 값을 숫자 리터럴로 생성하고 객체를 객체 리터럴로 생성하는 것처럼 함수도 함수 리터럴로 생성할 수 있다.
 * 함수 리터럴은 function 키워드, 함수 이름, 매개변수 목록, 함수 몸체로 구성된다.
 */
let add1 = function(x, y){
    return x + y;
}

/**
 * 함수 정의
 * 4가지 방법이 있다.
 *
 * 1. 함수 선언문
 * 2. 함수 표현식
 * 3. Function 생성자 함수
 * 4. 화살표 함수(ES6)
 */
function add2(x, y){
    return x + y;
} //함수 선언문

let add3 = function(x, y){
    return x + y;
} // 함수 표현식, 함수 리터럴로 생성

let add4 = new Function('x', 'y', 'return x + y');

let add5 = (x, y) => x + y;

console.log(add1(2 ,3)); // 5
console.log(add2(2 ,3)); // 5
console.log(add3(2 ,3)); // 5
console.log(add4(2, 3)); // 5
console.log(add5(2 ,3)); // 5
