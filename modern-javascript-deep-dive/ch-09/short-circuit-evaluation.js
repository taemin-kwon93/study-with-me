console.log(true && true); // 1 * 1 = 1 결과 : true
console.log(true && false); // 1 * 0 = 0 결과 : false
console.log(false && true); // 0 * 1 = 0 결과 : false
console.log(false && false); // 0 * 0 = 0 결과 : false
console.log(true || true); // 1 + 1 = 1 이상, 결과 : true
console.log(true || false); // 1 + 0 = 1 이상, 결과 : true
console.log(false || true); // 0 + 1 = 1 이상, 결과 : true
console.log(false || false); // 0 + 0 = 0, 결과 : false
console.log(true || 'Cat'); // true
console.log(false || 'Cat'); // Cat
console.log('Cat' || false); // Cat
console.log(false && 'Cat'); // Cat
console.log('Cat' && false); // Cat
console.log('Cat' || 'Dog'); // Cat
console.log('Cat' && 'Dog'); // Dog
console.log()

let obj = {name: 'kwon', age: 30}
console.log('TEST start obj || false');
console.log(obj || false);
console.log(false || obj);
console.log(obj && false);
console.log(false && obj);
console.log(false | obj);
console.log(false & obj);
console.log(obj);