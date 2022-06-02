let target = "https://poiemaweb.com";
let regExp = /^https/;
console.log(regExp.test(target)); // true

regExp = /com$/;
console.log(regExp.test(target)); // true
