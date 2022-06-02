const target = "Is this all ther is?";

// pattern: is
// flag: i -> 대소문자를 구별하지 않고 검색
const regExp = /is/i;

console.log(regExp.test(target));
