function foo(...rest) {
  // 1 2 3 -> [1, 2, 3]
  console.log(rest); // [ 1, 2, 3 ]
}

foo(...[1, 2, 3]); // [1, 2, 3] -> 1 2 3
