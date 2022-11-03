let let1 = 1;

if(true) {
  let let2 = 2;
  if(true) {
    let let3 = 3;
  }
} else {
  let let4 = 4;
}

function fun1(){
  let let5 = 5;
  function fun2(){
    let let6 = 6;
  }
}

console.log(let1); // 1
console.log(let2); // ReferenceError: let2 in not defined
console.log(let3);
console.log(let4);
console.log(let5);
console.log(let6);

var var1 = 1;

if(true) {
  var var2 = 2;
  if(true) {
    var var3 = 3;
  }
} else {
  var var4 = 4;
}

function fun1(){
  var var5 = 5;
  function fun2(){
    var var6 = 6;
  }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5); // ReferenceError: var5 is not defined
console.log(var6);

const const1 = 1;

if(true) {
  const const2 = 2;
  if(true) {
    const const3 = 3;
  }
} else {
  const const4 = 4;
}

function fun1(){
  const const5 = 5;
  function fun2(){
    const const6 = 6;
  }
}

console.log(const1);
console.log(const2); // ReferenceError: const2 is not defined
console.log(const3);
console.log(const4);
console.log(const5);
console.log(const6);
