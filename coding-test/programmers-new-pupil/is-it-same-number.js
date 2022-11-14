/**
 * 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 */
function solution(num1, num2) {
  let answer = -1;
  if(num1 == num2) answer = 1;
  return answer;
}

console.log(solution(1, 1)); // 1
console.log(solution(1, 2)); // -1
console.log(solution(3, 2)); // -1
console.log(solution(2, 2)); // 1