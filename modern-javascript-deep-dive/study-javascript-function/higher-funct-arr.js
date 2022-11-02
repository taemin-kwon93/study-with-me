var res1 = [1, 2, 3].map(function (i) {
  return i * 2;
});

console.log(res1); // [ 2, 4, 6 ]

var res2 = [1, 2, 3].map(function (i) {
  return i + '번';
});

console.log(res2); // [ '1번', '2번', '3번' ]

var res3 = [1, 2, 3].map(function (i) {
  return i - 2;
});

console.log(res3); // [ -1, 0, 1 ]

var res4 = [1, 2, 3].filter(function (item) {
  return item % 2;
});

console.log(res4); // [ 1, 3 ]
console.log()

var res5 = [2, 3, 4].reduce(function (acc, cur) {
  /**
   * [0, 0, 1]일때 4 4 4 나옴, [0, 1, 0]일때 4 4 5, [1, 0, 0]일때 4, 5, 5
   * [1, 1, 0]일때 4 5 6 res5 = 6, [1, 1, 1]일때 4, 5, 6 res5 = 7
   * [2, 3, 4]일때 4, 6, 9 res5 = 13
   */
  console.log(acc);
  console.log(cur); // [x, y, z]안에 담긴 값이 나옴 1 2 3
  console.log();

  return acc + cur;
}, 4);

console.log(res5);
