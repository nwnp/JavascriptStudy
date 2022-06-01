const users = [
  { id: 1, name: "jin" },
  { id: 2, name: "JIN" },
  { id: 3, name: "JJW" },
  { id: 4, name: "nwnp" },
];

console.log(users.findIndex((item) => item["name"] === "nwnp")); // 3
