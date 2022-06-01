const numbers = Array.from({ length: 5 }, (_, i) => i + 1);

const odds = numbers.filter((item) => item % 2);
console.log(odds);
