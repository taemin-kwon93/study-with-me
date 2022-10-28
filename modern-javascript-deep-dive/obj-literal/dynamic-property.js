let obj = {};
let key1 = 'ThisIsKey1';
let key2 = 'ThisIsKey2';

obj[key1] = 'value for key1';
console.log(obj); // { ThisIsKey1: 'value for key 1' }

obj[key2] = 'value for key2';
console.log(obj); // { ThisIsKey1: 'value for key1', ThisIsKey2: 'value for key2' }

