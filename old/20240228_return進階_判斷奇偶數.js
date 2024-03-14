// 小步測試，反覆驗證！
// return 詳細範例

// 檢查學生成績是否及格

// function checkScore(score){
//     if (score >=60){
//         return "及格";
//     }else{
//         return "不及格";
//     }
// }

// let tomScore = checkScore(60);
// console.log(tomScore);

// let markScore = checkScore(40);
// console.log(markScore);

// 判斷是否為偶數 一般if else
// let myInput = 8;

// if (myInput % 2 == 0){
//     console.log("偶數");
// }else{
//     console.log("奇數");
// }


// function test(){
//     count+=1;
//     console.log('test1');
// }
// test();

let count = 0;

//判斷是否為偶數 函數
function checkNumber(myInput){
    count+=1; 
    if (myInput % 2 == 0){
    return '偶數';
} else {
    return '奇數';
    }
}

let checkANumber = checkNumber(3);
console.log(checkANumber);

let checkBNumber = checkNumber(4);
console.log(checkBNumber);

console.log(`您一共計算了${count}次`);