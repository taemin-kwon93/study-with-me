/**
 * 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고,
 * 거기에 함수 객체를 할당한다.
 * foo 0x000000F2 | 0x00001332 | -> Reference
 *     메모리 주소   | 함수이름 foo |
 *     0x00001332 | function foo() {} |
 */
function foo() { console.log('foo') };

foo(); // foo

(function bar(){ console.log('bar'); });

// bar(); // ReferenceError: bar is not defined