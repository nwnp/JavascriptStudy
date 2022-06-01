const arr = [1, 2, 3];
console.log(arr.length);

arr.push(4);
console.log(arr.length);

arr.pop();
console.log(arr.length);

const arr2 = [, 4, , 5];
console.log(arr2); // [ <1 empty item>, 4, <1 empty item>, 5 ]
