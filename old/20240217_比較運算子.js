// 比較運算子 > < <= >= ==等於 !=不等於

// 比較運算子，利用變數比較
// let a = 2;
// let b = 3;
// console.log(a>b);

// let c = 4;
// let d = 3;
// console.log(c==d);

// let e = 8;
// let f = 5;
// console.log(f>=e);
// console.log(f!=e);

// =(賦予值)以及 ==(比較運算子，會自動轉型) 的差異
// let a = 1;
// let b = 2;
// console.log(a==b);
// console.log(a!=b);

// === 嚴謹模式，型別不同不會自動轉型
let a = 1;
let b = "1";
console.log(a==b); // ture
console.log(a===b); // false
console.log(a!==b); // false