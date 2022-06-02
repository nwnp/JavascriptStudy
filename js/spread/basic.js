console.log(...[1, 2, 3]); // 1 2 3
console.log(..."hello"); // h e l l o
console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
); // ['a', '1'] ['b', '2']
console.log(...new Set([1, 2, 3])); // 1 2 3
