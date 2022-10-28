function add1(x, y) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  return x + y;
}
console.log(add1(1, 2, 3)); // 3

const add2 = (x, y) => {
  return x + y
};
console.log(add2(1, 2, 3)); // 3
