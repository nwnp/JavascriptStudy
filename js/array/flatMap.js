const arr = ["hello", "world", "!"];

// flat()
console.log(arr.map((x) => x.split("")).flat());

// flatMap()
console.log(arr.flatMap((x) => x.split("")));

// [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', '!' ]
