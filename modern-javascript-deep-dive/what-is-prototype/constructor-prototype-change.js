const Person = (function() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = { // 2행, Person
    sayHello() {
      console.log(`Hi! I'm ${this.name}`);
    }
  };
  return Person;
}());

const me = new Person('Kwon') // 1행, Person