//let의 영역 구분
let x = 1;

if(true) {
  let x = 15;
  console.log(x); // 15
}
console.log(x); // 1

x = 5;
console.log(x); // 5

if(true) {
  x = 10;
}
console.log(x); // 10

// var의 영역 구분
var y = 2;

if(true) {
  var y = 4;
}
console.log(y); // 4