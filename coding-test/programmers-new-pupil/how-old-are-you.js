/**
 * 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다.
 * 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
 * @param age 주어지는 나이
 * @returns {number} 2022년 기준으로 출생연도를 확인
 */

// 나의 풀이
const solution = (age) => {
  let answer = 0;
  --age;
  answer = 2022 - age;
  return answer;
}
console.log(solution(40)); // 1983

// 마음에 들었던 다른사람의 풀이 1
function solution2(age) {
  return new Date().getFullYear() - age + 1;
}
console.log(solution2(40)); // 1983

// 마음에 들었던 다른사람의 풀이 2
function solution3(age) {
  var answer = 2022 - age + 1;
  return answer;
}
console.log(solution3(40)); // 1983

