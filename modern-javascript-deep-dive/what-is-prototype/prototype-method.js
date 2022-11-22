const Person = (function (){
  function Person(name) {
    this.name = name;
  };
  Person.prototype.sayHello = function() {
    console.log(`hi this is ${this.name}`);
  };

  return Person;
}());

const me = new Person('Kwon');
me.sayHello(); // hi this is Kwon
me.sayHello = function() {
  console.log(`hello it's ${this.name}`);
}

me.sayHello(); // hello it's Kwon

delete Person.prototype.sayHello;
me.sayHello(); // hello it's Kwon