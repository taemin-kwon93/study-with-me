function multiply(x, y) {
  console.log(arguments); // [Arguments] { '0': 2, '1': 3 }, [Arguments] { '0': 2, '1': 3, '2': 7 }
  return x * y;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(2, 3, 7)); // 6
/**
 * arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
 */
function sum() {
  let res = 0;
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); // 1 2 3 4 5
    res += arguments[i];
  }

  return res;
}

console.log(sum(1, 2, 3, 4, 5)); // 15