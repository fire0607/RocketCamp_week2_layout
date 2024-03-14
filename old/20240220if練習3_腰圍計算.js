// if包if練習
// 腰圍指數測量
// 男生腰圍大於90為過胖
// 女生腰圍大於80為過胖

// 1.判斷是男生還是女生
// 2.若為男生，判斷腰圍
// 3.若為女生，判斷腰圍

let sex = "woman";
let cm = 80;

if(sex=="male"){
    if(cm>90){
        console.log("男生體型過胖");
    }else{
        console.log("男生體型正常");
    }
}
else if(sex=="woman"){
    if(cm>80){
        console.log("女生體型過胖");
    }else{
        console.log("女生體型正常");
    }

}else{
    console.log("資料設定錯誤!");
}
console.log("計算結束!");