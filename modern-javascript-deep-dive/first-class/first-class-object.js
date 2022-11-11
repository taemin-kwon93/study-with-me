/**
 * 자바스크립트의 함수는 일급 객체다.
 * 아래의 조건을 모두 만족한다.
 *
 * 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성 가능
 * 2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
 * 3. 함수의 매개변수에 전달할 수 있다.
 * 4. 함수의 반환값으로 사용할 수 있다.
 *
 * 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다.
 */

// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수를 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function(num) {
  console.log('17 line function increase log - start');
  console.log(num);
  console.log('17 line function increase log - end');
  return ++num;
};

const decrease = function(num) {
  console.log('26 line function decrease log - start');
  console.log(num);
  console.log('26 line function decrease log - end');
  return --num;
};

// 2. 함수를 객체에 저장
const auxs = {increase, decrease};

console.log('auxs.increase AND auxs.decrease log - start');
console.log(auxs.increase(2)); // 3
console.log(auxs.decrease(2)); // 1
console.log('auxs.increase AND auxs.decrease log - end');
console.log('\n\n');

// 3. 함수를 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  console.log('makeCounter log');
  console.log('aux');
  console.log(aux); // [Function: increase OR decrease] OR [Function (anonymous)]. 57, 59, 66행에서 로그가 잡힘.
  console.log('aux');
  let num = 0;

  return function () {
    console.log('makeCounter return log');
    num = aux(num);
    return num;
  };
}

// 3. 함수를 매개변수에 전달할 수 있다.
const increase2 = makeCounter(auxs.increase); // 43행에 console.log가 찍힘 makeCounter log, 45행 [Function: increase]
console.log('increase2() log - start');
console.log(increase2); // [Function (anonymous)]
console.log(increase2()); // 1
console.log(increase2()); // 2
console.log('increase2() log - end');
console.log('\n\n');

// 3. 함수를 매개변수에 전달할 수 있다.
const decrease2 = makeCounter(auxs.decrease); // 43행에 console.log가 찍힘 makeCounter log, 45행 [Function: decrease]
console.log('decrease2() log - start');
console.log(decrease2()); // -1
console.log(decrease2()); // -2
console.log('decrease2() log - end');
console.log('\n\n');