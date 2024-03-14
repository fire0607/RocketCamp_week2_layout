// 觀察客戶體溫

let temperature = 36.5;

if(temperature>=37.5){
    console.log("體溫異常，禁止進入");
}
else{
    console.log("體溫正常，歡迎光臨")
}



// 計算成績是否及格
// let score = 59;
// if (score>=60){
//     console.log("成績及格!");
// }
// else{
//     console.log("成績不及格，延畢!");
// }



// 計算成績評等
let score = 88;

if (score>=80){
    console.log("成績優秀!");
}

// 此處老師範例為：(score >=60 && 79>=score)

else if(score>=60){
    console.log("成績普通!");
}
else{
    console.log("不及格!");
}