console.log(typeof (function(){})); // function
console.log(typeof (function add(){})); // function

let res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
}());

console.log(res); // 15

res = (function (a, b) {
  return a + b;
}(3 , 5));
console.log(res); // 8