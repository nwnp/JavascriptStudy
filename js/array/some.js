console.log([5, 10, 16].some((item) => item > 10)); // true
console.log([5, 10, 16].some((item) => item < 0)); // false

// 배열의 요소 중 'banana'가 1개 이상 존재하는지 확인
console.log(
  ["banana", "apple", "watermelon"].some((item) => item === "banana")
); // true
