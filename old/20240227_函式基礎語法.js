// 一般變數
let a = 1;

// 函數 範例為機器人-早起活動-起床刷牙洗臉出門
function morningAction(){
    console.log('起床');
    console.log('刷牙');
    console.log('洗臉');
    console.log('出門');
}

// 機器人-晚上活動

function nightAction(){
    console.log('回家');
    cleanHead(); //用函式簡化函式內容
    console.log('睡覺');
}

// 函式內可以再執行函式
function cleanHead(){
    console.log('刷牙');
    console.log('洗臉');
}

// 函式參數介紹
// num 參數

function a(num,num2){
    console.log(num);
    console.log(num2);
}
a(1,5);
a(3,7);

//console.log(num) 無法取得參數,參數只存在大括號內

// 函式 兩個數字的相加工具
function add(num1,num2){
    console.log(`您加總的數字為${num1+num2}`)
}
add(2,3);
add(246346,436346);