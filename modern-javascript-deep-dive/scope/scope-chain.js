/**
 * 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 이용한다.
 * 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.
 * 이를 통해 상위 스코프에서 선언한 변수를 하위 스코프에서도 참조할 수 있다.
 */
function B() {
  console.log('global B') // global B
}

function A() {
  let x = 'outter A';
  let z = 'outter Z';
  console.log(x); // outter A
  // console.log(y); // ReferenceError: y is not defined

  function B() {
    x = 'inner A';
    let y = 'B';
    console.log(x); // inner A
    console.log(y); // B
    console.log(z); // outter Z
  }
  B();
}

A();
B(); // global B
/**
 * 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만
 * 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다.
 * 스코프 체인으로 연결된 스코프의 계층적 구조는 부자 관계로 이뤄진 상속(inheritance)과 유사하다.
 * 상속을 통해 부모의 자산을 자식이 자유롭게 사용할 수 있지만
 * 자식의 자산을 부모가 사용할 수는 없다.
 * 스코프 체인도 마찬가지 개념이다.
 */