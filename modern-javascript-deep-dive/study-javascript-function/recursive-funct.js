function recursiveFunct(n) {
  if(n < 0) return;
  console.log(n);
  recursiveFunct(n - 1);
}
recursiveFunct(10); // 10 9 8 7 6 5 4 3 2 1 0
console.log();

function factorial(n) {
  if(n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1