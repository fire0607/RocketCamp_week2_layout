// 第二題
// 鍛鍊：拆解任務流程與設定變數
/*
「幫媽媽跑腿，紀錄花了多少錢，與跑腿了幾次」
小明的媽媽請她跑腿，因為小明一天規定自己只能出門三次，
所以和媽媽說最多跑三次腿
小明媽給了小明 300 元，請他去買兩罐牛奶跟兩份吐司，
小明到超商後看到牛奶 30 元吐司 20 元
當她到櫃台結帳時，櫃台告訴他剛好今天全部品項都打 5 折 !
買回家後，媽媽發現小明的東西都有買齊，就讓小明去玩耍了。
*/// 請試著拆解流程，並透過註解告知您的解題流程
// 最後兩行 code 請用 console.log 印出最後小明花完剩下多少錢，以及當天還能跑腿幾次的變數
// 最後提交 Codepen 連結給我們檢視

//小明可出門次數
let roundNum = 3;
// 小明錢包裡的錢
let money = 300;
// 物品價格
let milkPrice = 30;
let toastPrice = 20;

roundNum--;

// 店員說有折扣
const sale = 0.5;
let total =  (milkPrice*2+toastPrice*2)*sale;

let  balance = money-total;
roundNum--;

console.log(`小明剩下${balance}`)
console.log(`還有${roundNum}次跑腿機會`)


