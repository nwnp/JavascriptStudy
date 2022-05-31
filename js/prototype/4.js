/**
 * for ... in
 */

const person = {
  name: "jin",
  address: "incheon",
};

for (let key in person) {
  console.log(`key: ${key} -> ${person[key]}`);
}
