const fruits = ["b", "c", "a"];
fruits.sort();
console.log(fruits); // [ 'a', 'b', 'c' ]

const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

todos.sort(compare("id"));
console.log(todos);

const numbers = [1, 2, 3];
const pows1 = [];

for (let i = 0; i < numbers.length; i++) {
  pows1.push(numbers[i]);
}

const pows2 = [];
numbers.forEach((item) => pows2.push(item ** 2));
console.log(pows2);

[(1, 2, 3)].forEach((item, index, arr) => {
  console.log(`item: ${item}, index: ${index}, this: ${JSON.stringify(arr)}`);
});

/*
item: 1, index: 0, this: [1,2,3]
item: 2, index: 1, this: [1,2,3]
item: 3, index: 2, this: [1,2,3]
*/

console.log(numbers);
const roots = numbers.map((item) => Math.sqrt(item));
console.log(roots);

[1, 2, 3].map((item, index, arr) => {
  console.log(`item: ${item}, index: ${index}, this: ${JSON.stringify(arr)}`);
  return item;
});
