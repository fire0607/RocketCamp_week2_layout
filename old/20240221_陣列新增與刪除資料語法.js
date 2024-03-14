// push寫入資料流程(塞後面)
// 例如：新增資料放最後一筆
// let colors = ["blue","red","balck"];

// colors.push("pink");
// colors.push("yellow");

// console.log(colors);


// unshift寫入資料流程(塞前面)
// 例如：新增資料放第一筆
// let colors = ["blue","red","balck"];

// colors.unshift("pink");
// colors.unshift("yellow");

// console.log(colors);

// pop(刪除最後資料)與shift(刪除第一筆資料)刪除資料流程
// let colors = ["blue","red","balck"];

// colors.pop();
// colors.shift();

// console.log(colors);

// splice 刪除指定資料
// 第一個數字為起始位置
// 第二個數字為往後刪除N筆資料
// 例如：刪除留言板指定留言
let colors = ["blue","red","balck"];

colors.splice(2,1);

console.log(colors);

// 其他語法補充，見https://www.hexschool.com/2017/09/01/2017-09-01-javascript-for/