/** splice & concat method */
var arr1 = [1, 4];
var arr2 = [2, 3];

arr1.splice(1, 0, arr2);
console.log(arr1); // [1, [2, 3], 4]

arr1 = [1, 4];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1); // [1, 2, 3, 4]

arr1 = [1, 4];

/** spread */
arr1.splice(1, 0, ...arr2);
console.log(arr1);
