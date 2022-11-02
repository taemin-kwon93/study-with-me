/**
 * pure function 순수함수
 * 순수 함수는 외부상태에 의존하지 않고 매개변수를 통해 내부로 전달된 인수에게만 의존해 값을 생성하고 반환한다.
 */
var count1 = 0;

function increase1(n) {
  return ++n;
}

console.log('pure start');
console.log(increase1(count1)); // 1
console.log(count1); // 0

count1 = increase1(count1);
console.log(count1); // 1
count1 = increase1(count1);
console.log(count1); // 2
console.log('pure end');
console.log();

/**
 * 비순수 함수는 외부상태를 변경하므로 상태 변화를 추적하기 어렵다
 */

var count2 = 0;

function increase2(){
  return ++count2;
}

console.log('impure start');
increase2();
console.log(count2); // 1
increase2();
console.log(count2); // 2
console.log('impure end');

/** console 전체 출력 내용
 * pure start
 * 1
 * 0
 * 1
 * 2
 * pure end
 *
 * impure start
 * 1
 * 2
 * impure end
 */