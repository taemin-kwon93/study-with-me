function Person(name) {
  this.name = name;
}

const person1 = new Person('Kwon');
const person2 = new Person('Lee');

Person.prototype.sayHello = function() {
  console.log(`hello world It is ${this.name}`);
}

person1.sayHello(); // hello world It is Kwon
person2.sayHello(); // hello world It is Lee