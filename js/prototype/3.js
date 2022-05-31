/**
 * 'in' operator
 * key: 프로퍼티 키를 나타내는 문자열
 * object: 객체로 평가되는 표현식
 */

const person = {
  name: "jin",
  address: "incheon",
};

console.log("name" in person); // = Reflect.has(person, 'name')
console.log("address" in person); // = Reflect.has(person, 'address')
console.log("age" in person); // = Reflect.has(person, 'age')
console.log("toString" in person); // = Reflect.has(person, 'toString')
