let x = 'global';

function foo() {
  let x = 'local';
  console.log(x); // local
}
foo(); // 함수 실행 3행으로 이동, console.log로 값 출력
console.log(x); // global
