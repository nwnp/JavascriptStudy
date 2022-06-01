console.log(Array.isArray([])); // true
console.log(Array.isArray(1)); // false

const arr1 = [1, 2, 2, 3];
console.log(arr1.indexOf(2));
console.log(arr1.indexOf(4));

console.log(arr1.push(4)); // 5
console.log(arr1.unshift(-1, 0)); // 7

console.log(arr1);
console.log(arr1.pop());
console.log(arr1.shift());
console.log(arr1);

const arr2 = [1, 2, 3];
const arr3 = [6, 7, 8];

let result = arr2.concat(arr3);
console.log(result); // [ 1, 2, 3, 6, 7, 8 ]

result = arr2.concat(3);
console.log(result); // [1, 2, 3, 3]

result = arr2.concat(arr3, 5);
console.log(result); // [1, 2, 3, 6, 7, 8, 5]

const arr4 = [1, 2, 3, 4];
result = arr4.splice(1, 2, 30, 40);
console.log(result); // [2, 3]
console.log(arr4); // [1, 30, 40, 4]

result = arr4.slice(1, 3);
console.log(result); // [3, 4]

console.log(["h", "e", "l", "l", "o"].join(", ")); // h, e, l, l, o

let arr5 = [1, 2, 3];
arr5.fill(0);
console.log(arr5); // [0, 0, 0]

arr5 = [1, 2, 3];
arr5.fill(0, 1);
console.log(arr5); // [1, 0, 0]

arr5 = [1, 2, 3, 4, 5];
arr5.fill(0, 1, 3);
console.log(arr5); // [1, 0, 0, 4, 5]

const arr6 = [1, 2, 3, 4, 5];
console.log(arr6.includes(3)); // true
console.log(arr6.includes(3, 3)); // false
console.log(arr6.includes(5, -1)); // true

console.log([1, 2, [3, 4]].flat());
console.log([1, 2, [3, 4, 5, [6, 7, 8]]].flat());
console.log([1, 2, [3, 4, 5, [6, 7, 8]]].flat(2));
