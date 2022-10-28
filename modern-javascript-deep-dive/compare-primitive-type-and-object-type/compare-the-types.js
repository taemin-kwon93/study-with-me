// terminal에 `npm install lodash`를 입력후 실행하세요.
const deepCopy = require('lodash');

const o = { x: { y: 1 } };

console.log(o); // { x: { y: 1 } }
console.log(o.x); // { y: 1 }
console.log(o.x.y); // 1
console.log();

const z = o;
console.log(z); // { x: { y: 1 } }
console.log(z.x); // { y: 1 }
console.log(z.x.y); // 1
console.log();

console.log(o === z); // true
console.log(o.x === z.x); // true
console.log(o.x.y === z.x.y); // true
console.log();

const a = {...o};
console.log('spread');
console.log(o === a); // false
console.log(o.x === a.x); // true
console.log(o.x.y === a.x.y); // true
console.log();

const b = deepCopy.cloneDeep(o);
console.log('lodash'); // false
console.log(o === b); // false
console.log(o.x === b.x); // false
console.log(o.x.y === b.x.y); // true
console.log();