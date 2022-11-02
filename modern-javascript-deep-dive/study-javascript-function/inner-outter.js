function outter() {
  var x = 1;

  function inner() {
    var y = 2;
    console.log('x + y');
    console.log(x + y);
  }
  inner(); // outter 함수에서 inner 함수를 사용
}

outter(); // outter 함수 호출