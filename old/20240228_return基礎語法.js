// return寫法教學 
// return可以中斷函數執行

function calaTotalScore(chineseScore,mathScore){
    // console.log(chineseScore+mathScore); 僅印出計算後的值，未賦予變數值
    return chineseScore + mathScore; //讓變數擁有值

    //被return中斷
    console.log('hello'); 
    return 3;

}

let markScore = calaTotalScore(40,60);
let tomScore = calaTotalScore(100,100);

console.log(`Tom的總分為${tomScore}`);

// return 宣告 let

function calaTotalScore(chineseScore,mathScore){
    let totalScore = chineseScore+mathScore; //變數僅存在於此大括號中
    return  totalScore ; 
}