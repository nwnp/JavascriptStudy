const users = [
  { id: 1, name: "Jin" },
  { id: 2, name: "JJW" },
  { id: 3, name: "JW" },
  { id: 4, name: "nwnp" },
];

console.log(users.find((user) => user.id === 2)); // { id: 2, name: 'JJW' }
