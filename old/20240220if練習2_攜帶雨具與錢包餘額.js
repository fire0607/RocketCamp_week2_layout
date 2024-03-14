// 小華的習慣是
// 1.如果沒有下雨，就不會帶雨具
// 2.如果下毛毛雨，他會帶輕便雨衣
// 3.假使下普通的雨，他會帶折傘
// 4.如果下豪雨，他會帶長傘

// 今天的天氣是毛毛雨，那小華會帶什麼雨具？

let todayWeater = "豪雨";

// console.log(todayWeater =="沒有下雨");

if(todayWeater =="沒有下雨"){
    console.log("小華不帶雨具");
}
else if(todayWeater =="毛毛雨"){
    console.log("帶輕便雨衣");
}
else if(todayWeater =="普通的雨"){
    console.log("帶折傘")
}else if(todayWeater =="豪雨"){
    console.log("長傘")
}
else{
    console.log("不帶傘出門");
}

// 小華想查自己的錢包有多少錢

// 小華想出門，但不確定錢包有沒有錢
// 於是他想打開錢包看看還有多少錢
// 如果他有100元以上，他就吃80元的牛肉麵
// 如果沒有100元，那就不吃，也不出門

// 小華還想計算最後剩下多少元

let wallet = 0;
wallet+=70;

if(wallet>=100){
    wallet-=80
    console.log(`小華吃了牛肉麵，錢包還有${wallet}元`)

}else{
    wallet-=0;
    console.log(`小華錢包還有${wallet}元`)
}
// console.log(`小華錢包還有${wallet}元`)