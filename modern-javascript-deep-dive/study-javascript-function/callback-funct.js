/**
 * 함수의 변하지 않는 공통 로직은 미리 정의해 두고,
 * 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달한다.
 */
function repeat(n, f) {
  for(var i = 0; i < n; i++){
    f(i);
  }
}

var logAll = function(i) {
  console.log(i);
}

repeat(5, logAll); // 0 1 2 3 4

var logOdds = function(i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds); // 1 3

/**
 * 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수(callback function)라고 한다.
 * 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수(Higher-Order Function, HOF)라고 한다
 * 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
 */

/**
 * 콜백 함수가 고차 함수 내부에서만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달한다.
 * 익명함수 리터럴은 콜백 함수로 고차함수에 전달한다.
 */
repeat(5, function(i) {
  if (i % 2) console.log(i); // 1 3
})