function recursiveFunct(n) {
  if(n < 0) return;
  console.log(n);
  recursiveFunct(n - 1);
}
recursiveFunct(10);
console.log();

function factorial(n) {
  if(n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));