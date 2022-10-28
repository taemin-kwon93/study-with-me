/**
 * The Math.floor() method rounds a number DOWN to the nearest integer.
 * @param num1 나눗셈의 나누어질 수, dividend
 * @param num2 나누는 수, divisor
 * @returns {number} 결과값
 */

function solution(num1, num2) {
  let answer = num1 / num2;
  return Math.floor(answer);
}

console.log(solution(7, 2));