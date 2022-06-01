const arr = Array.from(
  { length: 5 },
  (_, i) => (i = Math.floor(Math.random() * 100))
);
console.log(arr); // [ 21, 4, 0, 23, 91 ]

delete arr[0];
console.log(arr); // [ <1 empty item>, 4, 0, 23, 91 ]
console.log(arr.length); // 5

/** splice() */
const arr2 = [1, 2, 3];
arr2.splice(1, 1);
console.log(arr2);
