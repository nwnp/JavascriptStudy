const arr1 = [1, 2, 3];
const arr2 = new Array(3); // Array 생성자

console.log(arr1);
arr2.push(4);
console.log(arr2); // [ <3 empty items> ]

/** Array.of */
// ES6에서 도입됨
const arr3 = Array.of(1);
arr3.push(2);
console.log(arr3);

const arr4 = Array.from({ length: 3, 0: "a", 1: "b", 2: "c" });
console.log(arr4); // [ 'a', 'b', 'c' ]

const arr5 = Array.from("hello"); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(arr5);

// callbakc function
const arr6 = Array.from({ length: 3 }, (_, i) => i ** 2); // [ 0, 1, 4 ]
console.log(arr6);
