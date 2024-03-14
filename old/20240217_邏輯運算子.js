// 邏輯運算子 && ||

// 同時滿足條件
// 範例：百貨公司周年慶，需為VIP且消費滿500，才能得贈品一份
let a = 1;
let b = 2;

console.log(a==1 && b==2); //兩個條件同時滿足，ture
console.log(a==2 && b==2); //只滿足一個，fasle


// 滿足其中一項條件
// 範例：百貨公司周年慶，無論是否為VIP，只要消費滿500，就能得贈品一份
let c = 3;
let d = 4;
console.log(c==4  || d==5); //滿足其中一個，ture
console.log(c==6  || d==5); //皆未滿足，fasle