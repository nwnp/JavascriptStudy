/** 특정 단어로 시작하는지 검사 */
let url = "https://example.com";
let regExp = /^https?:\/\//;
console.log(regExp.test(url)); // true

/** 특정 단어로 끝나는지 검사 */
let filename = "index.html";
regExp = /html$/;
console.log(regExp.test(filename)); // true

/** 숫자로만 이루어진 문자열인지 검사 */
let target = "12345";
regExp = /^\d+$/;
console.log(regExp.test(target)); // true

/** 하나 이상의 공백으로 시작하는지 검사 */
target = " Hi!";
console.log(/^[\s]+/.test(target)); //true

/** 아이디로 사용 가능한지 검사 */
// 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사
let id = "abc1234";
console.log(/^[A-Za-z0-9]{4,10}$/.test(id)); // true

/** 메일 주소 형식에 맞는지 검사 */
const email = "ujmn04432@gmail.com";
console.log(
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
    email
  )
); // true
