// 小美在氣溫低於 15 度時，會穿外套出門
// 今天氣溫 14 度，請以if敘述小美如何行動

let todayDegrees = 20;
let isWearJacket = 15 >= todayDegrees;

if(isWearJacket){
    console.log(`今天氣溫${todayDegrees}度`);
    console.log("小美穿上外套，準備出門了");
}else{
    console.log("小美沒穿外套，生氣地出門，大喊還我冬天");
}

// 小明想要去外面吃飯，牛肉麵一碗110
// 他不確定錢包剩下多少錢
// 有80元就吃骰子牛
// 有35元就吃薯條
// 如果連薯條都吃不起，就回家

let wallet = 50;

console.log(wallet>=110)

if(wallet>=110){
    console.log("小明跑去吃牛肉麵了")
}
else if(wallet>=80){
    console.log("小明跑去吃骰子牛")
}
else if(wallet>=35){
    console.log("小明跑去吃薯條")
}
else{
    console.log("小明錢不夠，哭著回家")
}