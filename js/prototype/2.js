/** instanceof operator */

function Person(name) {
  this.name = name;
}

const me = new Person("Jin");

console.log(me instanceof Person);
console.log(me instanceof Object);
