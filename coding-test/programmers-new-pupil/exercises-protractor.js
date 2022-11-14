/**
 * 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
 * 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
 * 예각 : 0 < angle < 90
 * 직각 : angle = 90
 * 둔각 : 90 < angle < 180
 * 평각 : angle = 180
 *
 * 제한사항
 * 0 < angle ≤ 180
 * angle은 정수입니다.
 */

// 나의 풀이
function solution(angle) {
  console.log(angle);
  let takeTheAngle = 0;

  if(0 < angle && angle < 90) {
    console.log('takeTheAngle < 90');
    takeTheAngle = 1;
  }else if(angle == 90) {
    console.log('takeTheAngle = 90');
    takeTheAngle = 2;기
  }else if(90 < angle && angle < 180) {
    console.log('90 < takeTheAngle < 180');
    takeTheAngle = 3;
  }else if(angle == 180) {
    console.log('takeTheAngle = 90');
    takeTheAngle = 4;
  }
  console.log(takeTheAngle);

  switch (takeTheAngle) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    default:
      return 0;
  }
}
console.log(solution(180));

// 마음에 들었던 풀이 방법
function solution2(angle) {
  return [0, 90, 91, 180].filter(x => angle>=x).length;
}