let myEmail = "  Tom  ";
let nameLength = myEmail.length;
let updateEmail = myEmail.trim();

myEmail.length;

console.log(nameLength);
console.log(updateEmail);
console.log(myEmail);

let myName = "Tom";
let myAge = 18;
// let content = "您好我是"+myName+"，我今年"+myAge+"歲";
// 可簡寫為下 較為直覺的語法
let content = `您好我是${myName}，我今年${myAge}歲`;

console.log(content);