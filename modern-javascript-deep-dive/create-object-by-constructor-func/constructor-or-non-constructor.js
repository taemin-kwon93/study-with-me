/**
 * 자바스크립트 엔진은 어떻게 constructor와 non-constructor를 구분할까.
 * constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
 * non-constructor : 메서드(ES6 메서드 축약표현), 화살표 함수
 */

/**
 * new 연산자가 사용 가능한 constructor
 */
function foo() {}
  const bar = function () {};
  const baz = {
  x: function () {}
  };

  new foo();
  new bar();
  new baz.x();

/**
 * new를 사용할수 없는 non-constructor
 */
  const arrow = () => {};
  // new arrow(); // TypeError: arrow is not a constructor

  // 메서드 정의 : ES6의 축약 표현만 메서드로 인정한다.
  const obj = {
    x() {}
  };

  // new obj.x(); // // TypeError: arrow is not a constructor

