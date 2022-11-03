function add1(x, y) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  return x + y;
}
console.log(add1(1, 2, 3)); // 3
