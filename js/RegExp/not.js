let target = "AA BB 12 Aa Bb";
let regExp = /[^0-9]+/g;
console.log(target.match(regExp)); // [ 'AA BB ', ' Aa Bb' ]
