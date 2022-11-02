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

var res5 = [0, 1, 0].reduce(function (acc, cur) {
  console.log(acc);
  // console.log(cur); // 1 2 3
  console.log();

  return acc + cur;
}, 4);

console.log(res5);
