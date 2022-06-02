/** 문자열 검색 */
let target = "Is this all there is?";
let regExp = /is/;

console.log(regExp.test(target)); // true
console.log(target.match(regExp)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

/** 임의의 문자열 검색 */
regExp = /.../g;
console.log(target.match(regExp)); // [ 'Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?' ]

/** 반복 검색 */
target = "A AA B BB BBB AA AAAA AA AAA A";
regExp = /A{1,2}/g;
console.log(target.match(regExp)); // [ 'A',  'AA', 'AA', 'AA', 'AA', 'AA', 'AA', 'A',  'A' ]

regExp = /A{2}/g;
console.log(target.match(regExp)); // [ 'AA', 'AA', 'AA', 'AA', 'AA', 'AA' ]

regExp = /A{2,}/g;
console.log(target.match(regExp)); // [ 'AA', 'AA', 'AAAA', 'AA', 'AAA' ]

regExp = /A+/g;
console.log(target.match(regExp)); // [ 'A',  'AA', 'AA', 'AAAA', 'AA', 'AAA', 'A' ]

target = "color colour";
regExp = /colou?r/g;
console.log(target.match(regExp)); // [ 'color', 'colour' ]
