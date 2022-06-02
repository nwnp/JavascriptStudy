const target = "Is this all ther is?";
const regExp = new RegExp(/is/);

console.log(target.match(regExp));
// [ 'is', index: 5, input: 'Is this all ther is?', groups: undefined ]
