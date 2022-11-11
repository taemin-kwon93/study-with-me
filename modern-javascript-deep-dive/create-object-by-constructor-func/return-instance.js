function Circle(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function(){
    return this.radius * 2;
  }

  // 3. 암묵적으로 this를 반환한다.
  /** return {};
   * 명시적으로 객체를 반환하면 암묵적인 this가 무시된다.
   * 이때
   * const circle = new Circle(1); 을 실행하고
   * console.log(circle); 을 실행하면, {}라는 빈 객체가 반환된다.
   * */

  // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
  return 100;
}

const circle1 = new Circle(1);
console.log(circle1); // Circle { radius: 1, getDiameter: [Function (anonymous)] }

const circle2 = new Circle(2);
console.log(circle2.getDiameter()); // 4

/**
 * 생성자 함수 내부에 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다.
 * 따라서 생성자 함수 내부에서 return 문을 반드시 생략해야 한다.
 */