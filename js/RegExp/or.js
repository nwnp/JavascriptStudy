let target = "a aa b bb aa bb";
let regExp = /a+|b+/g;
console.log(target.match(regExp)); // [ 'a', 'aa', 'b', 'bb', 'aa', 'bb' ]

target = "A AA BB ZZ Aa Bb";
// 'A' ~ 'Z'가 한 번 이상 반복되는 문자열 검색
regExp = /[A-Z]+/g;
console.log(target.match(regExp)); // [ 'A', 'AA', 'BB', 'ZZ', 'A', 'B' ]

target = "12,345";
regExp = /[0-9]+/g;
console.log(target.match(regExp)); // [ '12', '345' ]
regExp = /[0-9,]+/g;
console.log(target.match(regExp)); // [ '12,345' ]
regExp = /[\d,]+/g;
console.log(target.match(regExp)); // [ '12,345' ]
