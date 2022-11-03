function division(num1, num2) {
  let result = (num1 / num2) * 1000;
  return Math.round(result);
}

console.log(division(3, 2)); // 1500
console.log(division(7, 3)); // 2333
console.log(division(1, 16)); // expect 62 -> 63이 찍힘

