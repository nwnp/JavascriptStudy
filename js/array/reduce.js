const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);

console.log(sum); // 10

const fruits = ["banana", "apple", "orange", "orange", "apple"];
const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count); // { banana: 1, apple: 2, orange: 2 }

const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.reduce((acc, cur, i, arr) => {
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);

console.log(result); // [ 1, 2, 3, 5, 4 ]
